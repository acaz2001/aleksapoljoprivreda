"use server";

import { facebook } from "../facebook";

export async function fbTrack(event) {
  try {
    await facebook.track(event);
    return { ok: true };
  } catch (e) {
    console.log("fbTrack error:", e);
    return { ok: false };
  }
}
