"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,

} from "@/components/ui/sheet";
import {

  Network,
  Home,
  NotebookPen,
  User,
  UserRoundPlus,
  LayoutDashboard,
  AlignJustify,
  Bell,
  Award,
  Book,
} from "lucide-react";
import { getAuth, onAuthStateChanged } from "firebase/auth";


import { useTabStore } from "@/store/tabStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getDoc, getFirestore, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { TabKey } from "@/lib/Tabkey";
import { tabStrategies } from "@/lib/Tabkey";
interface dataProfile {
  name: string;
  email: string;
  uid: string;
  imageProfile: string;
}

export default function BottomNav() {
  const { activeTab, setActiveTab } = useTabStore();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const [profile, setProfile] = useState<dataProfile>();

useEffect(() => {
  const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {
    if (!user) {
      router.replace("/login");
      return;
    }

    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        console.log("Data user tidak ditemukan");
        return;
      }

      const data = docSnap.data() as dataProfile;
      console.log("DATA:", data); // 🔥 debug penting
      setProfile(data);

    } catch (error) {
      console.error("Error:", error);
    }
  });

  return () => unsubscribe();
}, [router]);

const renderContent = (activeTab: TabKey) => {
  return tabStrategies[activeTab];
};

  const navItems = [
    { key: "jaringan", icon: <Network size={22} /> },
    { key: "home", icon: <div className="bg-orange-500 p-2 text-white rounded-full"><Home size={22} /></div> },
    { key: "Module", icon: <Book size={22} /> },
    { key: "settings", icon: <User size={22} /> },
  ] as const;
  const now = new Date();
  const hariSekarang = now.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col min-h-fit bg-gray-50">
      <div className="flex justify-between items-center bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-b-lg px-4 py-3 text-white shadow-md">
        {/* Kiri: Hari + Halo */}
        <div>
          <p className="text-xs capitalize opacity-90">{hariSekarang}</p>
          {profile ? (
            <h1 className=" font-semibold">{profile?.name}</h1>
          ) : (
            <p>loading...</p>
          )}
        </div>

        {/* Kanan: Bell + Avatar */}
        <div className="flex items-center gap-3">
          {/* Icon Notifikasi */}
          <div className="p-2 bg-white/10 rounded-full">
            <Bell size={20} />
          </div>

          {/* Avatar / Logo */}
          {/* <img
            src={profile?.imageProfile} // fallback jika kosong
            alt="Avatar"
            width={40} // ukuran lebih pas
            height={40}
            className="rounded-full border border-gray-300 shadow-sm object-cover"
          /> */}
        </div>
      </div>
      <main className="flex-1">{renderContent(activeTab)}</main>

      {/* Side menu with Sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="left"
          className="w-64 bg-[#865b30] text-white p-0 h-screen overflow-y-auto  scrollbar-none"
        >
          <div className="p-4 ">
            <SheetTitle className="text-lg flex justify-center border-b-2 pb-4 border-white text-white items-center font-bold mb-4">
              Menu Utama
            </SheetTitle>
            <button
              className="w-full flex items-center gap-2 px-2 py-2 hover:bg-white/10 rounded mt-2"
              onClick={() => {
                setActiveTab("home");
                setOpen(false);
              }}
            >
              <LayoutDashboard size={18} />
              Dashboard
            </button>
            {/* <button
              className="w-full flex items-center gap-2 px-2 py-2 hover:bg-white/10 rounded mt-2"
              onClick={() => {
                setActiveTab("ManajemenBonus");
                setOpen(false);
              }}
            >
              <Wallet size={18} />
              Manajemen Bonus
            </button> */}

            {/* MAnajamene pin */}



            {/* penakan bonsu section  */}
            <div>
              {/* Menu lainnya */}

              {/* Parent item with toggle */}
              {/* <button
                onClick={() => setOpenNested2((prev) => !prev)}
                className="w-full flex items-center justify-between text-left px-2 py-2 hover:bg-white/10 rounded"
              >
                <span className="flex items-center gap-2">
                  <Wallet size={18} />
                  <span>Penarikan Bonus </span>
                </span>
                {openNested ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button> */}

              {/* Children (nested items) */}
              {/* {openNested2 && (
                <div className="ml-6 mt-1 space-y-1">
                  <button
                    className="block text-sm px-2 py-1 hover:bg-white/10 rounded w-full text-left"
                    onClick={() => {
                      setActiveTab("TotalBonus");
                      setOpen(false);
                    }}
                  >
                    Bonus Belum Ditarik
                  </button>
                  <button
                    className="block text-sm px-2 py-1 hover:bg-white/10 rounded w-full text-left"
                    onClick={() => {
                      setActiveTab("Withdraw");
                    }}
                  >
                    Formulir Penarikan
                  </button>
                  <button
                    className="block text-sm px-2 py-1 hover:bg-white/10 rounded w-full text-left"
                    onClick={() => {
                      setActiveTab("RIwayatWD");
                    }}
                  >
                    Status Penarikan
                  </button>
                </div>
              )} */}
            </div>
            {/* Nested Menu Example */}
            <div>
              {/* Parent item with toggle */}
              <button
                onClick={() => {
                  setActiveTab("jaringan");
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between text-left px-2 py-2 hover:bg-white/10 rounded"
              >
                <span className="flex items-center gap-2">
                  <Network size={18} />
                  <span>Affiliate</span>
                </span>

              </button>

              {/* Children (nested items) */}

            </div>
            {/* Reward */}
            <div>
              {/* Parent item with toggle */}
              <button
                onClick={() => {
                  setActiveTab("RewardPeringkat");
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between text-left px-2 py-2 hover:bg-white/10 rounded"
              >
                <span className="flex items-center gap-2">
                  <Award size={18} />
                  <span>Reward</span>
                </span>

              </button>

              {/* Children (nested items) */}

            </div>


            {/* Module fiur */}

            <div>
              <button
                onClick={() => {
                  setActiveTab("Module");
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between text-left px-2 py-2 hover:bg-white/10 rounded"
              >
                <span className="flex items-center gap-2">
                  <Book size={18} />
                  <span> Module Kelas</span>
                </span>

              </button>
            </div>
            {/* Module fiur */}


            {/* Daftar Mitra baru */}
            <div>
              <button
                className="w-full flex items-center justify-between text-left px-2 py-2 hover:bg-white/10 rounded"
                onClick={() => {
                  setActiveTab("produk");
                }}
              >
                <span className="flex items-center gap-2">
                  <UserRoundPlus size={18} />
                  <span>Daftra Mitra Baru</span>
                </span>
              </button>
            </div>
            <div>
              {/* Menu lainnya */}

              {/* Parent item with toggle */}
              {/* <button
                onClick={() => setOpenNested5((prev) => !prev)}
                className="w-full flex items-center justify-between text-left px-2 py-2 hover:bg-white/10 rounded"
              >
                <span className="flex items-center gap-2">
                  <Users size={18} />
                  <span>Reseller </span>
                </span>
                {openNested5 ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button> */}

              {/* Children (nested items) */}

            </div>
          </div>
        </SheetContent>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg px-8 py-4 flex justify-between gap-8 w-[100%] max-w-md z-50">
          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-full transition-all duration-200 text-gray-500"
          >
            <AlignJustify size={22} />
          </button>

          {/* Tab Items */}
          {navItems.map(({ key, icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`p-2 rounded-full transition-all duration-200 ${activeTab === key ? " " : "text-gray-500"
                }`}
            >
              {icon}
            </button>
          ))}
        </nav>
      </Sheet>
      {/* <Footer/> */}
    </div>
  );
}
