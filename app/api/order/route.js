import { Resend } from "resend";

export const runtime = "nodejs";
const resend = new Resend(process.env.RESEND_API_KEY);

function formatRSD(n) {
  return `${new Intl.NumberFormat("sr-RS").format(Number(n || 0))} RSD`;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const item = body?.item;
    const customer = body?.customer;

    if (!process.env.RESEND_API_KEY) {
      return Response.json({ ok: false, error: "Nedostaje RESEND_API_KEY." }, { status: 500 });
    }

    if (!process.env.ORDER_TO_EMAIL) {
      return Response.json({ ok: false, error: "Nedostaje ORDER_TO_EMAIL." }, { status: 500 });
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

    const toOwner = process.env.ORDER_TO_EMAIL;
    const from = process.env.RESEND_FROM_EMAIL || "Porudzbine <onboarding@resend.dev>";

    const storeName = process.env.STORE_NAME || "Prodavnica";
    const storeEmail = process.env.STORE_EMAIL || toOwner;
    const storePhone = process.env.STORE_PHONE || "";

    // 1) MEJL TEBI (sa svim podacima)
    const subjectOwner = `Nova porudžbina: ${item.proizvodIme} (${item.varijantaIme})`;

    const htmlOwner = `
      <h2>Nova porudžbina</h2>
      <h3>Proizvod</h3>
      <ul>
        <li><b>Proizvod:</b> ${item.proizvodIme}</li>
        <li><b>Varijanta:</b> ${item.varijantaIme}</li>
        <li><b>Ponuda:</b> ${item.ponuda?.opis} (${item.ponuda?.komada} kom)</li>
        <li><b>Cena:</b> ${formatRSD(item.ponuda?.cena)}</li>
        <li><b>Dostava:</b> ${dostavaCena === 0 ? "Besplatna" : formatRSD(dostavaCena)}</li>
        <li><b>Ukupno:</b> ${formatRSD(ukupno)}</li>
        <li><b>Banner:</b> ${item.ponuda?.banner || "-"}</li>
      </ul>

      <h3>Kupac (dostava)</h3>
      <ul>
        <li><b>Ime:</b> ${customer.ime}</li>
        <li><b>Prezime:</b> ${customer.prezime}</li>
        <li><b>Adresa:</b> ${customer.adresa}</li>
        <li><b>Telefon:</b> ${customer.telefon}</li>
        <li><b>Email:</b> ${customer.email}</li>
      </ul>
    `;

    // replyTo je podržan parametar u send payload-u :contentReference[oaicite:0]{index=0}
    const ownerSend = await resend.emails.send({
      from,
      to: [toOwner],
      subject: subjectOwner,
      html: htmlOwner,
      replyTo: customer.email,
    });

    if (ownerSend.error) {
      return Response.json({ ok: false, error: ownerSend.error.message || "Greška pri slanju mejla (owner)." }, { status: 500 });
    }

    // 2) MEJL KUPCU (potvrda)
    const subjectCustomer = `Potvrda porudžbine — ${storeName}`;

    const htmlCustomer = `
      <h2>Hvala na porudžbini! ✅</h2>
      <p>Zabeležili smo tvoju porudžbinu i uskoro te kontaktiramo.</p>

      <h3>Detalji porudžbine</h3>
      <ul>
        <li><b>Proizvod:</b> ${item.proizvodIme}</li>
        <li><b>Varijanta:</b> ${item.varijantaIme}</li>
        <li><b>Ponuda:</b> ${item.ponuda?.opis} (${item.ponuda?.komada} kom)</li>
        <li><b>Cena:</b> ${formatRSD(item.ponuda?.cena)}</li>
        <li><b>Dostava:</b> ${dostavaCena === 0 ? "Besplatna" : formatRSD(dostavaCena)}</li>
        <li><b>Ukupno:</b> ${formatRSD(ukupno)}</li>
      </ul>

      <h3>Podaci za dostavu</h3>
      <ul>
        <li><b>Ime i prezime:</b> ${customer.ime} ${customer.prezime}</li>
        <li><b>Adresa:</b> ${customer.adresa}</li>
        <li><b>Telefon:</b> ${customer.telefon}</li>
        <li><b>Email:</b> ${customer.email}</li>
      </ul>

      <p>Ako imaš pitanje, odgovori na ovaj mejl ili piši na <b>${storeEmail}</b>${storePhone ? ` / pozovi <b>${storePhone}</b>` : ""}.</p>
    `;

    const customerSend = await resend.emails.send({
      from,
      to: [customer.email],
      subject: subjectCustomer,
      html: htmlCustomer,
      replyTo: toOwner,
    });

    if (customerSend.error) {
      // Porudžbina je već stigla tebi; kupcu nije — vrati poruku ali bez obaranja kompletno po želji.
      return Response.json({ ok: true, id: ownerSend.data?.id, warning: "Mejl kupcu nije poslat." });
    }

    return Response.json({ ok: true, id: ownerSend.data?.id });
  } catch (e) {
    return Response.json({ ok: false, error: e.message || "Server error" }, { status: 500 });
  }
}
