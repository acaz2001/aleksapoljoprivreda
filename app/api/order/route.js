export const runtime = "nodejs";

function formatRSD(n) {
  return `${new Intl.NumberFormat("sr-RS").format(Number(n || 0))} RSD`;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const item = body?.item;
    const customer = body?.customer;


    if (!process.env.ORDER_TO_EMAIL) {
      // ORDER_TO_EMAIL can be used for logging or future features; if missing, warn but continue.
      console.warn("ORDER_TO_EMAIL nije definisan u env.")
    }

    // validacija (osnovno)
    if (!item?.proizvodIme || !item?.varijantaIme || !item?.ponuda?.cena) {
      return Response.json({ ok: false, error: "Nedostaju podaci o proizvodu." }, { status: 400 });
    }

    const required = ["ime", "prezime", "adresa", "telefon", "email"];
    for (const k of required) {
      if (!customer?.[k] || !String(customer[k]).trim()) {
        return Response.json({ ok: false, error: `Polje "${k}" je obavezno.` }, { status: 400 });
      }
    }

    const dostavaCena = item?.ponuda?.dostavaBesplatna ? 0 : 1000;
    const ukupno = Number(item?.ponuda?.cena || 0) + Number(dostavaCena || 0);

    const toOwner = process.env.ORDER_TO_EMAIL || null;
    const storeName = process.env.STORE_NAME || "Prodavnica";

    // Currently we don't send emails from the server — Formspree handles email delivery.
    // Return a simple acknowledgement with computed totals for client-side use/logging.
    return Response.json({
      ok: true,
      message: "Porudžbina primljena (bez slanja mejla).",
      data: {
        item: {
          proizvodIme: item.proizvodIme,
          varijantaIme: item.varijantaIme,
          ponuda: item.ponuda,
        },
        customer: {
          ime: customer.ime,
          prezime: customer.prezime,
          adresa: customer.adresa,
          telefon: customer.telefon,
          email: customer.email,
        },
        ukupno,
        toOwner,
        storeName,
      },
    });
  } catch (e) {
    return Response.json({ ok: false, error: e.message || "Server error" }, { status: 500 });
  }
}
