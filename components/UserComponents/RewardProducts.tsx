"use client";

import React, { useState } from "react";

type Reward = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const dummyRewards: Reward[] = [
  {
    id: "1",
    title: "Aromatic Terapi",
    description: "1 box reward",
    image: "/images/12.png",
  },
  {
    id: "2",
    title: "Baju",
    description: "1 pcs baju ",
    image: "/images/12.png",
  },
  {
    id: "3",
    title: "Merchandise Eksklusif",
    description: "Quantum Bootcamp",
     image: "/images/12.png",
  },
  {
    id: "4",
    title: "Merchandise Eksklusif",
    description: "Quantum Bootcamp",
     image: "/images/12.png",
  },
  {
    id: "5",
    title: "Merchandise Eksklusif",
    description: "Quantum Bootcamp",
     image: "/images/12.png",
  },
];

export default function RewardProducts() {
  const [claimedIds, setClaimedIds] = useState<string[]>([]);

  const isPremiumUser = true; // dummy (anggap user berbayar)

  const handleClaim = (id: string) => {
    if (!isPremiumUser) {
      alert("Harus jadi member premium dulu");
      return;
    }

    if (claimedIds.includes(id)) {
      alert("Sudah di-claim");
      return;
    }

    setClaimedIds((prev) => [...prev, id]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🎁 Reward Produk</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyRewards.map((item) => {
          const isClaimed = claimedIds.includes(item.id);

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <div className="h-40 bg-gray-200">
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h2 className="font-semibold text-gray-800">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {item.description}
                </p>

                {/* Status / Button */}
                {isClaimed ? (
                  <div className="mt-4 text-green-600 text-sm font-semibold">
                    ✔ Sudah di-claim
                  </div>
                ) : (
                  <button
                    onClick={() => handleClaim(item.id)}
                    className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                  >
                    Claim Reward
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {dummyRewards.length === 0 && (
        <div className="text-center text-gray-400 mt-10">
          Belum ada reward
        </div>
      )}
    </div>
  );
}