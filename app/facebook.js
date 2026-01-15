import { FacebookTracking } from "next-facebook-tracking";

export const facebook = new FacebookTracking({
  // koristi tvoje env varijable (preporuka)
  pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  accessToken: process.env.FB_ACCESS_TOKEN,

  // opcionalno (za test events)
  testCode: process.env.META_TEST_EVENT_CODE,

  debug: false,
});
