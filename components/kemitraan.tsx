"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const sokidPackages = [
  {
    title: "Advance",
    price: "Rp 10.00.000",
    description:
      "Semua Module dan Pembelajaran terbuka.",
    benefits: [
      "Video Module",
      "Ebook",
      "Course",
      "Pertemuan 1x seminggu",
    ],
    badge: "EKSCLUSIF",
    onJoin: () => alert("Gabung sebagai SOKID STOKIS"),
  },
  {
    title: "Mid-level",
    price: "Rp 5.000.000",
    description:
      "Video dan Course Terbuka",
    benefits: [
      "Corse",
      "video",
      "pertemuan 1x",
   
    ],
    badge: "REKOMENDASI",
    onJoin: () => alert("Gabung sebagai SOKID AGEN"),
  },
  {
    title: "Beginner",
    price: "Rp 1.000.000",
    description:
      "Dasar Materi dan Dasar-Dasar Tools.",
    benefits: [
      "Video",
      "Beberapa corse",
  
    ],
    badge: "",
    onJoin: () => alert("Gabung sebagai SOKID MEMBER"),
  },
];

export function SokidList() {
  return (
    <div id="kemitraan" className="  gap-8 md:grid-cols-3 py-10">
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 text-center leading-tight">
          Pilihan Paket <span className="text-orange-600">Belajar</span> Kami
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officia porro error saepe molestias tenetur officiis dolores quidem illo optio?
        </p>
      </div>
    <div className="grid gap-8 md:grid-cols-3 py-10">
  {sokidPackages.map((pkg, i) => (
    <div
      key={i}
      className={cn(
        " relative rounded-xl border-2 p-8 shadow-xl transition-all min-h-[420px] flex flex-col justify-between hover:scale-[1.02] hover:shadow-gold/50",
        pkg.badge === "EKSCLUSIF" &&
          "border-yellow-400 bg-orange-500 text-white",
        pkg.badge === "REKOMENDASI" && "border-orange-600",
        !pkg.badge && "border-muted bg-white"
      )}
    >
      {pkg.badge && (
        <div
          className={cn(
            "absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded-full",
            pkg.badge === "EKSCLUSIF" && "bg-yellow-400 text-black",
            pkg.badge === "REKOMENDASI" && "bg-orange-600 text-white"
          )}
        >
          {pkg.badge}
        </div>
      )}

      <div className="py-10">
        <h2 className="text-5xl font-bold mb-2">{pkg.title}</h2>
        <p className="text-xl opacity-80 mb-4">{pkg.description}</p>

        <div
          className={cn(
            "text-4xl font-extrabold mb-6",
            pkg.badge === "EKSCLUSIF" && "text-yellow-400"
          )}
        >
          {pkg.price}
        </div>

        <ul className="mb-6 space-y-2 text-2xl">
          {pkg.benefits.map((item, idx) => (
            <li key={idx} className="flex items-center">
              <CheckCircle
                className={cn(
                  "w-5 h-5 mr-2",
                  pkg.badge === "EKSCLUSIF"
                    ? "text-yellow-400"
                    : "text-green-500"
                )}
              />
              {item}
            </li>
          ))}
        </ul>


          <Button
        className={cn(
          "w-full text-2xl font-bold mt-auto py-6 mt-10",
          pkg.badge === "EKSCLUSIF" &&
            "bg-yellow-400 text-black hover:bg-yellow-300",
          pkg.badge === "REKOMENDASI" && "bg-orange-600 hover:bg-orange-500"
        )}
        onClick={pkg.onJoin}
      >
        Gabung Sekarang
      </Button>
      </div>

    
    </div>
  ))}
</div>
    </div>
  );
}
