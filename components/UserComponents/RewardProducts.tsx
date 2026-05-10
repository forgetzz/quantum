"use client";

import { db } from "@/lib/firebase";
import { ProductsGift } from "@/Types/ProductsGiftTypes";
import { fetchData } from "@/service/Fetchdata";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";





export default function RewardProducts() {
  const [claimedIds, setClaimedIds] = useState<string[]>([]);
  const [gift, setGift] = useState<ProductsGift[]>([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function getProducts() {
      try {
        const result = await fetchData<ProductsGift>("Gift");
        console.log(result)
        setGift(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }

    getProducts();
  }, [])


  // const handleClaim = async (id: string) => {
  //   if (!user) return
  //   if (profile?.gift) {
  //     alert("Harus jadi member premium dulu");
  //     return;
  //   }



  //   if (claimedIds.includes(id)) {
  //     alert("Sudah di-claim");
  //     return;
  //   }
  //   await updateDoc(doc(db, 'users', user.uid), {
  //     gift: true
  //   })
  //   setGift(true)
  //   setClaimedIds((prev) => [...prev, id]);
  // };

  return (
    <div className="p-6 mb-20 ">
      <h1 className="text-2xl font-bold mb-6"> Reward Produk</h1>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${gift ? "pointer-events-none opacity-30" : ""
          }`}
      >
        {gift.map((item, key) => {
          const isClaimed = claimedIds.includes(item.id);

          return (
            <div
              key={key}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <div className="h-40 bg-gray-200">
                <img
                  src={item.urlImage}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h2 className="font-semibold text-gray-800">
                  {item.ProductName}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {item.ProductTotal} PCS
                </p>

                {/* Status / Button */}
                {isClaimed ? (
                  <div className="mt-4 text-green-600 text-sm font-semibold">
                    ✔ Sudah di-claim
                  </div>
                ) : (
                  <button
                    // onClick={() => handleClaim(item)}
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

      {gift.length === 0 && (
        <div className="text-center text-gray-400 mt-10">
          Belum ada reward
        </div>
      )}
    </div>
  );
}