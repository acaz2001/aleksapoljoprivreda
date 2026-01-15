import crypto from "crypto";

function sha256(value) {
  if (!value) return undefined;
  return crypto
    .createHash("sha256")
    .update(String(value).trim().toLowerCase())
    .digest("hex");
}

export async function POST(req) {
  try {
    const body = await req.json();

    const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
    const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

    if (!PIXEL_ID || !ACCESS_TOKEN) {
      return Response.json(
        { ok: false, error: "Missing META_PIXEL_ID or META_CAPI_TOKEN" },
        { status: 500 }
      );
    }

    const url = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

    const eventId = body.event_id || `order_${Date.now()}`;

    const payload = {
      data: [
        {
          event_name: "Purchase",
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          action_source: "website",

          // user_data pomaže Meta matchingu (hashirano)
          user_data: {
            em: body.email ? [sha256(body.email)] : undefined,
            ph: body.phone ? [sha256(body.phone)] : undefined,
          },

          custom_data: {
            currency: "RSD",
            value: Number(body.value || 0),
            contents: body.contents || [],
          },
        },
      ],
    };

    const fbRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const fbJson = await fbRes.json();

    return Response.json({ ok: fbRes.ok, fb: fbJson }, { status: fbRes.ok ? 200 : 400 });
  } catch (e) {
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
