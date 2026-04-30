
import Home2 from "@/components/UserComponents/home";

import Affiliate from "@/components/UserComponents/Affiliate";
import Module from "@/components/UserComponents/Module";
import MitraRegisterPage from "@/components/UserComponents/DaftarMitra";
import ProfilePage from "@/components/UserComponents/setting";
import RewardProducts from "@/components/UserComponents/RewardProducts";




export const tabStrategies = {
  home: <Home2 />,
  jaringan: <Affiliate />,
  produk: <MitraRegisterPage />,
  settings: <ProfilePage />,

  RewardPeringkat: <RewardProducts />,

  Module: <Module />,
} as const;
export type TabKey = keyof typeof tabStrategies;