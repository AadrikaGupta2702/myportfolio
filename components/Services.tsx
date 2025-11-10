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
    <section
      id="services"
      className="py-24 px-6 sm:px-10 bg-[--color-section-dark] text-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-[--color-accent]">
        My Services
      </h2>

      {/* --- GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.length > 0 ? (
          services.map((s) => (
            <div
              key={s.id}
              className="group p-8 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_-5px_var(--color-accent)] hover:bg-sky-400/[0.1] flex flex-col items-start gap-5"
            >
              {/* --- ICON --- */}
              <div className="w-16 h-16 rounded-xl bg-[--color-accent]/10 border border-[--color-accent]/30 flex items-center justify-center group-hover:bg-[--color-accent]/20 transition">
                {s.iconUrl ? (
                  <img
                    src={s.iconUrl}
                    alt={s.title}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <span className="text-3xl text-[--color-accent]">🔧</span>
                )}
              </div>

              {/* --- TEXT --- */}
              <div>
                <h3 className="text-2xl font-semibold text-[--color-accent] mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {s.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">
            No services added yet.
          </p>
        )}
      </div>
    </section>
  );
}
