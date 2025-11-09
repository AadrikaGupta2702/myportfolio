// components/Services.tsx
"use client";
import { useEffect, useState } from "react";
import { getCollection } from "@/lib/firestoreHelpers";

export default function Services() {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      setServices(await getCollection("services"));
    })();
  }, []);

  return (
    <section id="services" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.id}
            className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-md bg-white/6 flex items-center justify-center">
                {s.iconUrl ? (
                  <img src={s.iconUrl} alt={s.title} className="w-10 h-10 object-contain" />
                ) : (
                  <span className="text-2xl">🔧</span>
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
                <p className="text-gray-300">{s.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
