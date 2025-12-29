"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function KorpaPage() {
  const router = useRouter();

  const [item, setItem] = useState(null);

  const [form, setForm] = useState({
    ime: "",
    prezime: "",
    adresa: "",
    telefon: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("korpa_item");
      if (saved) setItem(JSON.parse(saved));
    } catch (e) {
      console.log("Korpa read error:", e);
    }
  }, []);

  function formatRSD(n) {
    return `${new Intl.NumberFormat("sr-RS").format(Number(n || 0))} RSD`;
  }

  // Dostava: 1000 RSD osim ako je dostavaBesplatna === true
  const dostavaCena = useMemo(() => {
    if (!item) return 0;
    return item?.ponuda?.dostavaBesplatna ? 0 : 1000;
  }, [item]);

  const ukupno = useMemo(() => {
    if (!item) return 0;
    return Number(item?.ponuda?.cena || 0) + Number(dostavaCena || 0);
  }, [item, dostavaCena]);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  function validate() {
    if (!form.ime.trim()) return "Unesi ime.";
    if (!form.prezime.trim()) return "Unesi prezime.";
    if (!form.adresa.trim()) return "Unesi adresu.";
    if (!form.telefon.trim()) return "Unesi broj telefona.";
    if (!form.email.trim()) return "Unesi email.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return "Email nije validan.";
    return "";
  }

  async function onSubmit(e) {
    e.preventDefault();
    setMsg({ type: "", text: "" });

    if (!item) {
      setMsg({ type: "err", text: "Nema izabranog proizvoda u korpi." });
      return;
    }

    const err = validate();
    if (err) {
      setMsg({ type: "err", text: err });
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item,
          customer: form,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Greška pri slanju porudžbine.");
      }

      // snimi za /hvala stranicu
      sessionStorage.setItem(
        "order_success",
        JSON.stringify({
          orderId: data.id || null,
          item,
          customer: form,
          dostavaCena,
          ukupno,
        })
      );

      router.push("/hvala");
    } catch (e) {
      setMsg({ type: "err", text: e.message || "Greška." });
    } finally {
      setLoading(false);
    }
  }

  if (!item) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-semibold">Korpa</h1>
        <p className="mt-4">Korpa je prazna (nema izabranog proizvoda).</p>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold">Korpa</h1>

      {/* Izabrani proizvod */}
      <div className="mt-6 border rounded-lg p-4">
        <h2 className="text-sm font-semibold">{item.proizvodIme}</h2>

        <div className="mt-2 text-sm">
          <p className="text-xl">
            <span className="font-semibold text-xl">Varijanta:</span> {item.varijantaIme}
          </p>
          <p className="text-xl">
            <span className="font-semibold text-xl">Ponuda:</span> {item.ponuda?.opis} ({item.ponuda?.komada} kom)
          </p>
        </div>

        {item.ponuda?.banner ? (
          <div className="mt-3 inline-block bg-[#1B4A36] text-white text-xs font-semibold px-3 py-1 rounded">
            {item.ponuda.banner}
          </div>
        ) : null}

        <div className="mt-4 border-t pt-4 text-sm">
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
            <span className="font-semibold">Ukupno za naplatu</span>
            <span className="font-semibold">{formatRSD(ukupno)}</span>
          </div>
        </div>
      </div>

      {/* Forma */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Podaci za dostavu</h3>

        {msg.text ? (
          <div className={`mt-3 p-3 rounded ${msg.type === "ok" ? "bg-green-100" : "bg-red-100"}`}>
            {msg.text}
          </div>
        ) : null}

        <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-3">
          <input className="border rounded p-3" name="ime" placeholder="Ime" value={form.ime} onChange={onChange} />
          <input className="border rounded p-3" name="prezime" placeholder="Prezime" value={form.prezime} onChange={onChange} />
          <input className="border rounded p-3" name="adresa" placeholder="Adresa" value={form.adresa} onChange={onChange} />
          <input className="border rounded p-3" name="telefon" placeholder="Broj telefona" value={form.telefon} onChange={onChange} />
          <input className="border rounded p-3" name="email" placeholder="Email" value={form.email} onChange={onChange} />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#0F2A1D] text-white text-[18px] py-3 rounded-lg font-semibold disabled:opacity-60"
          >
            {loading ? "Slanje..." : "Završi porudžbinu"}
          </button>
        </form>
      </div>
    </main>
  );
}
