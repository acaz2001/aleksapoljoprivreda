"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
// prilagodi putanju tvom projektu:

export default function FormaProizvod({ product }) {
  const router = useRouter();

  const [variantIndex, setVariantIndex] = useState(0);
  const [offerIndex, setOfferIndex] = useState(0);

  const currentVariant = product?.proizvodVarijante?.[variantIndex];
  const offers = currentVariant?.ponuda || [];

  

  // ako promenis varijantu, resetuj ponudu na prvu
  function chooseVariant(idx) {
    setVariantIndex(idx);
    setOfferIndex(0);
  }

  // cene u tvom JSON-u su tipa 6.190 (sto je u JS zapravo 6.19)
  // ovo je "krpljenje" da 6.190 postane 6190.
  // NAJBOLJE: u bazi cuvaj 6190, 9904, 12999... (bez tacke)
  function normalizePrice(p) {
    if (p == null) return 0;

    if (typeof p === "string") {
      const cleaned = p.replace(/[^\d]/g, "");
      const n = Number(cleaned);
      return Number.isFinite(n) ? n : 0;
    }

    if (typeof p === "number") {
      if (p < 1000 && p % 1 !== 0) return Math.round(p * 1000); // 6.190 -> 6190
      return Math.round(p);
    }

    return 0;
  }

  function formatRSD(n) {
    return `${new Intl.NumberFormat("sr-RS").format(n)} RSD`;
  }

  function handleOrder() {
    if (!product || !currentVariant || !offers.length) return;

    const selectedOffer = offers[offerIndex];

    const item = {
      key: `${product.proizvodId}-${variantIndex}-${selectedOffer.komada}`,
      proizvodId: product.proizvodId,
      proizvodIme: product.proizvodIme,
      varijantaIme: currentVariant.ime,
      ponuda: {
        komada: selectedOffer.komada,
        cena: normalizePrice(selectedOffer.cena),
        staraCena: selectedOffer.staraCena ? normalizePrice(selectedOffer.staraCena) : null,
        opis: selectedOffer.opis || "",
        dodatak: selectedOffer.dodatak || "",
        banner: selectedOffer.banner || "",
        dostavaBesplatna: !!selectedOffer.dostavaBesplatna, // <-- NOVO
      },
    };

    sessionStorage.setItem("korpa_item", JSON.stringify(item)); // <-- NOVO
    router.push("/korpa");
  }

  const ikonica = (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M34.9268 6.20001C34.9091 5.92078 34.7983 5.65555 34.612 5.44677C34.4258 5.23798 34.1748 5.09773 33.8994 5.04845C27.1416 3.83595 24.3205 2.95939 18.0143 0.110949C17.8525 0.0378224 17.677 0 17.4994 0C17.3219 0 17.1464 0.0378224 16.9846 0.110949C10.6783 2.95939 7.85723 3.83595 1.09942 5.04845C0.824007 5.09773 0.573088 5.23798 0.386828 5.44677C0.200568 5.65555 0.0897385 5.92078 0.0720791 6.20001C-0.228702 10.9742 0.412704 15.4227 1.98067 19.4219C3.26467 22.684 5.1649 25.6683 7.57755 28.2117C11.7549 32.6438 16.19 34.5688 17.0361 34.9094C17.3368 35.031 17.673 35.031 17.9736 34.9094C18.8197 34.5688 23.2549 32.6438 27.4322 28.2117C29.841 25.6673 31.7374 22.6831 33.0182 19.4219C34.5861 15.4227 35.2275 10.9742 34.9268 6.20001ZM24.6924 12.068L16.0361 22.068C15.9248 22.1969 15.7883 22.3018 15.6351 22.3761C15.4818 22.4504 15.3149 22.4925 15.1447 22.5H15.0932C14.766 22.5001 14.4519 22.3719 14.2182 22.143L10.3744 18.3774C10.2572 18.2624 10.1637 18.1256 10.0993 17.9745C10.0349 17.8235 10.0009 17.6613 9.99928 17.4971C9.99591 17.1655 10.1244 16.8462 10.3565 16.6094C10.5885 16.3726 10.9052 16.2376 11.2367 16.2342C11.5683 16.2309 11.8876 16.3594 12.1244 16.5914L15.015 19.4266L22.8041 10.432C22.9115 10.3079 23.0423 10.2061 23.1891 10.1326C23.3358 10.059 23.4956 10.015 23.6594 10.0032C23.8231 9.99136 23.9876 10.0119 24.1434 10.0636C24.2992 10.1154 24.4432 10.1973 24.5674 10.3047C24.6915 10.4121 24.7933 10.5429 24.8669 10.6897C24.9405 10.8364 24.9844 10.9962 24.9963 11.16C25.0081 11.3237 24.9875 11.4882 24.9358 11.644C24.8841 11.7998 24.8022 11.9438 24.6947 12.068H24.6924Z"
        fill="#B59A5A"
      />
    </svg>
  );

  if (!product) return null;

  return (
    <main className="w-full flex flex-col gap-5 mt-5">
      <div>
        <h1 className="text-[20px] font-semibold mb-4">1. Izaberi dimenziju električnog ćebeta</h1>

        <div className="flex md:flex-row flex-col items-center gap-2">
          {product.proizvodVarijante.map((v, idx) => {
            const active = idx === variantIndex;

            return (
              <button
                key={v.ime}
                type="button"
                onClick={() => chooseVariant(idx)}
                className={`border-1 flex flex-col md:px-10 px-2 py-3 w-full 
                justify-between rounded-md gap-2 relative transition-all cursor-pointer
                  ${active ? "bg-[#f3f1ec] border-[#1b4a36] border-2 font-semibold" : "border-[#1B4A3680]"}`}
              >
                {/* primer bannera samo na prvoj (po tvojoj logici) */}
                {idx === 0 && (
                  <div className="absolute -top-3 right-4 bg-[#1B4A36] py-1 
                  px-4 w-fit rounded-md">
                    <p className="text-white text-[12px] font-semibold">Najpopularnije</p>
                  </div>
                )}

                <div className="flex items-center justify-center">
                  <h1 className="md:text-[20px] text-[16px] ">{v.ime}</h1>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <h1 className="text-[20px] font-semibold">2. Evo naše ponude za tebe</h1>

      <div className="w-full flex flex-col gap-4">
        {offers.map((p, idx) => {
          const active = idx === offerIndex;

          return (
            <button
              key={`${p.komada}-${p.cena}`}
              type="button"
              onClick={() => setOfferIndex(idx)}
              className={`border-1 flex flex-col md:px-10 px-2 py-3 w-full 
                justify-between rounded-md gap-2 relative cursor-pointer 
                transition-all
                ${active ? "bg-[#f3f1ec] border-[#1b4a36] border-2 font-semibold" : "border-[#1B4A3680]"}`}
            >
              {/* Banner iz JSON-a ako postoji */}
              {p.banner && (
                <div className="absolute -top-3 right-4 bg-[#1B4A36] py-1 px-4 w-fit rounded-md">
                  <p className="text-white text-[12px] 
                  font-semibold">{p.banner}</p>
                </div>
              )}

              <div className="flex flex-row justify-between">
                <h1 className="md:text-[20px] sm:text-[18px] text-[16px] md:text-center 
                text-start md:pl-0 sm:pl-0 pl-4">
                  {p.opis || `Ponuda ${idx + 1}`}
                </h1>
                <p className="md:text-[20px] text-[16px]">{formatRSD(normalizePrice(p.cena))}</p>
              </div>

              {(p.dodatak || p.staraCena) && (
                <div className="flex flex-row justify-between">
                  <h1 className="md:text-[14px] text-[#777] font-semibold md:pl-0 
                  sm:pl-0 pl-4 text-[12px]">
                    {p.dodatak || ""}
                  </h1>

                  {p.staraCena ? (
                    <p className="md:text-[20px] text-[12px] text-[#777] 
                    font-semibold relative">
                      {formatRSD(normalizePrice(p.staraCena))}
                      <span className="absolute left-0 md:top-3.5 w-full h-[1.5px]
                       bg-[#777] top-1.5"></span>
                    </p>
                  ) : (
                    <span />
                  )}
                </div>
              )}

              {p.dostavaBesplatna ? 
                <div className="bg-[#D9D9D9] flex justify-start py-3 px-5 rounded-md">
                    <h1 className="md:text-[20px] text-[18px] font-semibold text-white">
                      <span className="text-[20px] pr-2 font-semibold text-white">+</span> 
                      Besplatna dostava
                    </h1>
                </div>
              : null}

              {/*
              
              <div className="text-left text-[14px] text-[#555]">
                <span className="font-semibold">Varijanta:</span> {currentVariant?.ime}
                {" · "}
                <span className="font-semibold">Komada:</span> {p.komada}
              </div>
              */}
            </button>
          );
        })}
      </div>

      <section className="flex md:flex-row items-center justify-center gap-5 w-full 
      mt-2 flex-row">
        <div>{ikonica}</div>
        <div>
          <h1 className="md:block hidden md:text-[24px] text-[20px] font-semibold md:text-start text-start">
            Kupovina bez rizika, 100% sigurnost i garancija.
          </h1>
          <h1 className="md:hidden block md:text-[24px] text-[20px] font-semibold md:text-start text-start">
            100% Garancija
          </h1>
          <p className="md:text-[16px] text-[14px] font-medium md:text-start text-start
          md:pt-0 pt-2">
            Ako ti ćebe stigne sa oštećenjem, menjamo za novo, o našem trošku.
          </p>
        </div>
      </section>

      <button
        type="button"
        onClick={handleOrder}
        className="bg-[#0F2A1D] text-white text-[20px] py-3 rounded-lg cursor-pointer font-semibold"
      >
        Poruči
      </button>
    </main>
  );
}
