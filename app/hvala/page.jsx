"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fbEvent } from '@rivercode/facebook-conversion-api-nextjs';


export default function HvalaPage() {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("order_success");
      if (saved) setData(JSON.parse(saved));
    } catch (e) {
      console.log(e);
    }
  }, []);

  // Facebook Conversion API - Praćenje kupovine
  useEffect(() => {
    if (data && fbEvent) {
      fbEvent({
        eventName: 'Purchase',
        eventId: data.orderId || `order_${Date.now()}`,
        emails: [data.customer?.email],
        phones: [data.customer?.telefon],
        firstName: data.customer?.ime,
        lastName: data.customer?.prezime,
        country: 'Serbia',
        city: data.customer?.grad,
        zipCode: data.customer?.postanskiBroj,
        products: [{
          sku: data.item?.id || data.item?.proizvodIme,
          quantity: 1,
        }],
        value: data.ukupno,
        currency: 'RSD',
        enableStandardPixel: false
      });
    }
  }, [data, fbEvent]);

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
      <p className="mt-2">Poslali smo ti potvrdu na: <b>{customer.email}</b></p>
      {orderId ? <p className="mt-1 text-sm opacity-70">ID porudžbine: {orderId}</p> : null}

      <div className="mt-6 border rounded-lg p-4">
        <h2 className="text-lg font-semibold">{item.proizvodIme}</h2>
        <p className="text-sm mt-1"><b>Varijanta:</b> {item.varijantaIme}</p>
        <p className="text-sm"><b>Ponuda:</b> {item.ponuda?.opis} ({item.ponuda?.komada} kom)</p>

        <div className="mt-4 text-sm border-t pt-3">
          <div className="flex justify-between">
            <span>Cena</span>
            <span className="font-semibold">{formatRSD(item.ponuda?.cena)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Dostava</span>
            <span className="font-semibold">{dostavaCena === 0 ? "Besplatna" : formatRSD(dostavaCena)}</span>
          </div>
          <div className="flex justify-between mt-3 text-base">
            <span className="font-semibold">Ukupno</span>
            <span className="font-semibold">{formatRSD(ukupno)}</span>
          </div>
        </div>
      </div>

      <div>
         <Link href='/proizvod' >
            <button className="bg-[#0F2A1D] text-white text-[18px] py-3 rounded-lg font-semibold disabled:opacity-60 w-full mt-5">
                Nazad na početnu stranicu
            </button>
        </Link>
       
      </div>
    </main>
  );
}
