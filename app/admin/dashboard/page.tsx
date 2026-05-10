"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import {

  doc,

  updateDoc,
} from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { User } from "@/Types/User"
import Alert from "@/components/layoutComponents/alert";
import { fetchData } from "@/service/Fetchdata";
import useTheme from "@/hooks/useTheme";
import { Colors } from "@/utils/Colors";
import { Moon, Sun, ThermometerIcon } from "lucide-react";


export default function AdminPage() {
  const [user, setUser] = useState<User[]>([]);
  const router = useRouter();
  const [alert, setAlert] = useState(false)
  const { isDark, ThemeToggle } = useTheme()


  const theme = isDark ? Colors.Primary_BG : Colors.Secondary_BG

  const fetchDatas = async () => {
    // const userSnap = await getDocs(collection(db, "users"));
    // const data = userSnap.docs.map((doc) => ({
    //   id: doc.id,
    //   ...doc.data() as User
    // }))

    const data = await fetchData<User>("users")
    setUser(data);
  };



  useEffect(() => {
    fetchDatas();
  }, [user])

  const handleUpdate = async (uid: string) => {
    try {

      await updateDoc(doc(db, "users", uid), {
        defi: true,

      })
      setAlert(true)
    } catch {
      console.log("erorr")
    }
  }

  const handleUpdate2 = async (uid: string) => {
    try {

      await updateDoc(doc(db, "users", uid), {
        trade: true
      })

      setAlert(true)
      console.log("erorr")
    } catch {
      console.log("erorr")
    }
  }



  const handleLogout = () => {
    signOut(auth).then(() => router.replace("/admin/login"));
  };





  return (
    <div className={`min-h-screen p-6 ${theme}`}>
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex items-center justify-between mb-6">
          <button className="flex border-orange-500 border-2   shadow-[0_0_15px_#f97316] p-1  rounded-md" onClick={ThemeToggle}>
            {isDark ? <p className="flex p-1 gap-2"><Sun /> Dark</p> : <p className="flex p-1 gap-2"><Moon /> Dark</p>}
          </button>

          <h1 className="text-3xl font-bold text-orange-600">
            🛠 Admin Panel - Quantum Bootcamp
          </h1>
          <button
            onClick={handleLogout}
            className="bg-orange-500 px-4 py-2 rounded hover:bg-gray-400"
          >
            Logout
          </button>

        </div>

        <section className={`p-6 rounded-xl shadow text-gray-800 ${theme}`} >
          <h2 className="text-2xl font-semibold mb-4">👥 Daftar User</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-left">
              <thead className="">
                <tr>

                  <th className="p-2 text-sm">Name</th>
                  <th className="p-2 text-sm">Username</th>
                  <th className="p-2 text-sm">Email</th>
                  <th className="p-2 text-sm">addressEVM</th>
                  <th className="p-2 text-sm">Rekening</th>
                  <th className="p-2 text-sm">Whatsap</th>
                  <th className="p-2 text-sm">Defi Activasi</th>
                  <th className="p-2 text-sm">trade Activasi</th>
                </tr>
              </thead>
              <tbody>
                {user.map((user, i) => (
                  <tr key={i} className="border-t hover:border-orange-500">

                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.username}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">
                      {user.addressEVM.slice(0, 3)}...
                      {user.addressEVM.slice(-3)}
                    </td>
                    <td className="p-3">{user.rekening}</td>
                    <td className="p-3">{user.whatsapp}</td>


                    <td> <button className="text-white" onClick={() => handleUpdate(user.uid)}>{user.defi ? <p className="bg-green-500 p-2 rounded-lg">Aktif</p> : <p className="bg-red-500 p-2 rounded-lg">NonAktif</p>}</button></td>


                    <td className="p-3">< button className="text-white" onClick={() => handleUpdate2(user.uid)}>{user.trade ? <p className="bg-green-500 p-2 rounded-lg">Aktif</p> : <p className="bg-red-500 p-2 rounded-lg">NonAktif</p>}</button></td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>



        <div className="fixed left-1/2 top-5 -translate-x-1/2 z-50">
          <Alert
            show={alert}
            setShow={setAlert}
            title="Berhasil"
            description="Data berhasil disimpan"
            color="success"
          />
        </div>


      </div>
    </div>
  );
}
