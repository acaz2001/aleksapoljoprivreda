"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { fbTrack } from "@/app/actions/fbTrack";

export default function HvalaPage() {
  const [data, setData] = useState(null);

  // da ne posalje event 2 puta (StrictMode, rerender...)
  const sentRef = useRef(false);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("order_success");
      if (saved) setData(JSON.parse(saved));
    } catch (e) {
      console.log(e);
    }
  }, []);

  // Facebook Purchase event
  useEffect(() => {
    if (!data || sentRef.current) return;
    sentRef.current = true;

    const eventId = data.orderId || `order_${Date.now()}`;

    fbTrack({
      event_name: "Purchase",
      event_id: eventId,
      custom_data: {
        currency: "RSD",
        value: Number(data.ukupno || 0),
        content_type: "product",
        num_items: 1,
        contents: [
          {
            id: data.item?.id || data.item?.proizvodIme,
            quantity: 1,
            item_price: Number(data.item?.ponuda?.cena || 0),
          },
        ],
        
      },
      // ✅ TEST EVENT CODE (ubaci tvoj)
      test_event_code: "TEST1234567",
    }).catch(console.log);
  }, [data]);

  function formatRSD(n) {
    return `${new Intl.NumberFormat("sr-RS").format(Number(n || 0))} RSD`;
  }

  if (!data) {
    return (
      <main className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold">Hvala!</h1>
        <p className="mt-3">Porudžbina je evidentirana.</p>
      </main>
    );
  }

  const { item, customer, dostavaCena, ukupno, orderId } = data;

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold">Hvala na porudžbini!</h1>
      <p className="mt-2">
        Poslali smo ti potvrdu na: <b>{customer.email}</b>
      </p>
      {orderId ? (
        <p className="mt-1 text-sm opacity-70">ID porudžbine: {orderId}</p>
      ) : null}

      <div className="mt-6 border rounded-lg p-4">
        <h2 className="text-lg font-semibold">{item.proizvodIme}</h2>
        <p className="text-sm mt-1">
          <b>Varijanta:</b> {item.varijantaIme}
        </p>
        <p className="text-sm">
          <b>Ponuda:</b> {item.ponuda?.opis} ({item.ponuda?.komada} kom)
        </p>

        <div className="mt-4 text-sm border-t pt-3">
          <div className="flex justify-between">
            <span>Cena</span>
            <span className="font-semibold">{formatRSD(item.ponuda?.cena)}</span>
          </div>

          <div className="flex justify-between mt-2">
            <span>Dostava</span>
            <span className="font-semibold">
              {dostavaCena === 0 ? "Besplatna" : formatRSD(dostavaCena)}
            </span>
          </div>

          <div className="flex justify-between mt-3 text-base">
            <span className="font-semibold">Ukupno</span>
            <span className="font-semibold">{formatRSD(ukupno)}</span>
          </div>
        </div>
      </div>

      <Link href="/proizvod">
        <button className="bg-[#0F2A1D] text-white text-[18px] py-3 rounded-lg font-semibold disabled:opacity-60 w-full mt-5">
          Nazad na početnu stranicu
        </button>
      </Link>
    </main>
  );
}
