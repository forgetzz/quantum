import { Authcontext } from "@/Context/authContex";
import { useContext } from "react";


export function useAuth() {
  const context = useContext(Authcontext);

  if (!context) {
    throw new Error(
      "useAuth harus dipakai di dalam AuthContextProvider"
    );
  }

  return context;
}