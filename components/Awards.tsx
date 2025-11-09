// components/Awards.tsx
"use client";
import { useEffect, useState } from "react";
import { getCollection } from "@/lib/firestoreHelpers";

export default function Awards() {
  const [awards, setAwards] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      setAwards(await getCollection("awards"));
    })();
  }, []);

  return (
    <section id="awards" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Awards & Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {awards.map((a) => (
          <div key={a.id} className="bg-white/5 rounded-xl overflow-hidden">
            {a.imageFile ? (
              <img
                src={`/images/awards/${a.imageFile}`}
                alt={a.title}
                className="w-full object-cover"
              />
            ) : (
              <div className="w-full h-44 bg-white/6 flex items-center justify-center">
                No image
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold">{a.title}</h3>
              <p className="text-gray-300 mt-2">{a.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
