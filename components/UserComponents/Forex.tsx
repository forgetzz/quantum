import { useAuth } from "@/hooks/useUser";
import React, { useState } from "react";


export default function Forex() {

  const { user } = useAuth()


  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-900 text-black px-6 ${user?.TaskTrade === 5 ? " " : " cursor-not-allowed  opacity-30"} `}>
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl font-bold">
          Trading Challenge $5000
        </h1>

        <p className="text-black">
          Loloskan diri kamu untuk mengelola dana real dengan batas risiko 6%.
          Kalau gagal, ya… market tidak peduli ego kamu.
        </p>

        <div className="bg-black/10 backdrop-blur p-4 rounded-xl text-left text-sm">
          <p>📌 Modal: $5000</p>
          <p>📌 Max Loss: 6%</p>
          <p>📌 Wajib disiplin risk management</p>
          <p>📌 Tanpa kontrol emosi = gagal</p>
        </div>

        <button
          onClick={() => alert("Data kamu sedang diproses")}
          className={`px-6 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-xl font-semibold shadow-lg ${user?.TaskTrade === 5 ? "   " : "pointer-events-none"} `}
        >
          Saya ingin ikut tes
        </button>
      </div>
    </div>
  );



}