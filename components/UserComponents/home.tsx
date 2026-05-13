import React, { ReactHTMLElement, useEffect, useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import SertifikatSection from "./Slider";
import { Star } from "lucide-react";
interface datas {
  name: string;
  email: string;
  username: string;
  TaskDefi:number
  TaskTrade: number

}

export default function Home2() {
  const [profile, setProfile] = useState<datas>();
const trade = Number(profile?.TaskTrade)

  useEffect(() => {
    const unsub = onAuthStateChanged(getAuth(), async (user) => {
      if (!user) return alert("login dulu");

      try {
        const dbRef = await getDoc(doc(db, "users", user.uid));
        if (!dbRef.exists()) {
          return alert("data anda belum ada");
        }
        const dataDb = dbRef.data() as datas;
        setProfile(dataDb);
      } catch {
        console.error("Kesalahan pada data anda");
      }
    });
    return () => unsub();
  }, []);


  const star = (rating: number) => {
    return Array.from({ length: rating }).map((_, i) => (
      <Star className="text-yellow-500 flex" key={i} />
    ));
  };
  return (
    <div className="p-6 space-y-6 text-gray-800 mb-36 ">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Selamat Datang, {profile?.name}!</h1>
        <p className="text-sm text-gray-600">
          Ini adalah ringkasan aktivitas dan pencapaian Anda.
        </p>
        <div></div>
      </div>

      {/* Total Mitra */}
      <div className=" certificate  p-6 rounded-xl shadow flex flex-col items-center text-center">
        {/* <div className="bg-blue-500 p-4 rounded-full mb-4">
          <Users className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-base font-semibold">Total Referensi</h2>
        <p className="text-4xl font-bold mt-1">{jumlahAnak}</p>
        <p className="text-sm text-gray-500 mt-1">
          Jumlah Referensi di jaringan Anda
        </p> */}
        <div className="sertifikat">
          <SertifikatSection profile={String(profile?.name)} />
        </div>
        <h1 className="h1">Lihat Sertifikat di window desktop</h1>
      </div>

      <div>
        <CardStat judul="Trade Task" angka={star(trade)} keterangan="aktif" />
      </div>

      <div className="">
        <CardStat judul="Defi Task" angka={star(Number(profile?.TaskDefi))} keterangan="aktif" />
      </div>

      {/* <div className="flex justify-center">
      <Level/>
    </div> */}

    </div>
  );
}

// Komponen kartu statistik
function CardStat({
  judul,
  angka,
  keterangan,
}: {
  judul: string;
  angka: React.ReactNode;
  keterangan: string;
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow flex flex-col gap-5">
      <p className="text-3xl font-medium">{judul}</p>
      <p className="text-2xl font-bold text-black mt-1 flex gap-4">{angka}</p>
    </div>
  );
}
