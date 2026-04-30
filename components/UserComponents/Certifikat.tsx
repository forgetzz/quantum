"use client";

import React from "react";

type CertificateProps = {
  name: string;
  title?: string;
  description?: string;
  date?: string;
  issuer?: string;
};

const Certificate: React.FC<CertificateProps> = ({
  name,
  title = "SERTIFIKAT PENGHARGAAN",
  description = "Diberikan kepada",
  date = "01 Januari 2026",
  issuer = "Quantum Bootcamp",
}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[500px] h-[320px] bg-white border-[6px] border-gray-900 shadow-2xl relative p-4">

        {/* Border dalam */}
        <div className="border-2 border-yellow-500 w-full h-full text-center relative p-3">

          {/* Logo */}
          <div className="absolute top-3 left-3">
            <img className="w-9" src="/images/12.png" alt="" />
          </div>

          {/* Judul */}
          <h1 className="text-sm font-bold tracking-[3px] text-gray-800">
            {title}
          </h1>

          {/* Garis */}
          <div className="w-20 h-[2px] bg-yellow-500 mx-auto my-2"></div>

          <p className="text-[10px] text-gray-500">
            {description}
          </p>

          {/* Nama */}
          <div className="my-3">
            <h2 className="text-lg font-semibold border-b border-gray-800 inline-block px-3 pb-1">
              {name}
            </h2>
          </div>

          {/* Deskripsi */}
          <p className="text-[10px] text-gray-600 px-4 leading-relaxed">
            Atas pencapaian luar biasa dalam bidang yang telah ditentukan.
          </p>

          {/* Footer */}
          <div className="flex justify-between mt-6 px-6 text-[10px]">
            <div className="text-center">
              <div className="w-[100px] border-t mt-6"></div>
              <p className="mt-1">Quantum Bootcamp</p>
            </div>

            <div className="text-center">
              
              <div className="w-[100px] border-t mt-6"></div>
              <p className="mt-1">Penerima</p>
            </div>
          </div>

          {/* Tanggal */}
          <div className="absolute bottom-2 right-3 text-[9px] text-gray-500">
            {date}
          </div>

          {/* Issuer */}
          <div className="absolute bottom-2 left-3 text-[9px] text-gray-500">
            {issuer}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Certificate;