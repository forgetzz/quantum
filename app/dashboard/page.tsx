"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,

} from "@/components/ui/sheet";
import {

  Network,
  Home,

  User,
  UserRoundPlus,
  LayoutDashboard,
  AlignJustify,
  Bell,
  Award,
  Book,
  Users,
} from "lucide-react";



import { useTabStore } from "@/store/tabStore";
import { useState } from "react";
import { TabKey } from "@/constants/Tabkey";
import { tabStrategies } from "@/constants/Tabkey";
import { useAuth } from "@/hooks/useUser";
import { formatTanggalIndonesia } from "@/utils/date";

export default function BottomNav() {
  const { activeTab, setActiveTab } = useTabStore();
  const [open, setOpen] = useState(false);
  const { user, isLoading } = useAuth()
  const now = new Date();


  const renderContent = (activeTab: TabKey) => {
    return tabStrategies[activeTab];

  };

  const navItems = [
    { key: "jaringan", icon: <Network size={22} /> },
    { key: "home", icon: <div className="bg-orange-500 p-2 text-white rounded-full"><Home size={22} /></div> },
    { key: "Module", icon: <Book size={22} /> },
    { key: "settings", icon: <User size={22} /> },
  ] as const;

  return (
    <div className="flex flex-col min-h-fit bg-gray-50">
      <div className="flex justify-between items-center bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-b-lg px-4 py-3 text-white shadow-md">
        {/* Kiri: Hari + Halo */}
        <div>
          <p className="text-xs capitalize opacity-90">{formatTanggalIndonesia(now)}</p>
          {user ? (
            <h1 className=" font-semibold">{user?.name}</h1>
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




            <div>
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


              <button
                onClick={() => {
                  setActiveTab("RewardPeringkat");
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between text-left px-2 py-2 hover:bg-white/10 rounded"
              >
                <span className="flex items-center gap-2">
                  <Award size={18} />
                  <span>Gift</span>
                </span>

              </button>



            </div>



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

            <div>
              <button
                className="w-full flex items-center justify-between text-left px-2 py-2 hover:bg-white/10 rounded"
                onClick={() => {
                  setActiveTab("trading");
                }}
              >
                <span className="flex items-center gap-2">
                  <Users size={18} />
                  <span>Trading Team</span>
                </span>
              </button>
            </div>
            <div>
              <button
                className="w-full flex items-center justify-between text-left px-2 py-2 hover:bg-white/10 rounded"
                onClick={() => {
                  setActiveTab("produk");
                }}
              >
                <span className="flex items-center gap-2">
                  <UserRoundPlus size={18} />
                  <span>Daftra Member</span>
                </span>
              </button>
            </div>
            <div>

            </div>
          </div>
        </SheetContent>


        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg px-8 py-4 flex justify-between gap-8 w-[100%] max-w-md z-50">

          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-full transition-all duration-200 text-gray-500"
          >
            <AlignJustify size={22} />
          </button>


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

    </div>
  );
}
