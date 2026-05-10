"use client";

import { useState } from "react";
import CertificateDefi from "./DefiCertifikat";
import Certificate from "./TradeCertifikat";


export default function SertifikatSection({
    
  profile,
}: {
  profile: any;
}) {
  const [index, setIndex] = useState(0);

  const items = [
    <Certificate
      key="cert1"
      name={profile}
    />,
    
    <CertificateDefi
      key="cert2"
      name={profile}
    />,
  ];

  function nextSlide() {
    setIndex((prev) => (prev + 1) % items.length);
  }

  function prevSlide() {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  }

  return (
    <div className="w-full flex flex-col items-center gap-4">
      
      <div className="w-full overflow-hidden">
        {items[index]}
      </div>

      <div className="flex gap-3">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Prev
        </button>

        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}