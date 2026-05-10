import { db } from '@/lib/firebase'
import { getAuth } from 'firebase/auth'
import { collection, doc, getDoc, getDocs, query, where, Timestamp } from 'firebase/firestore'
import { Key } from 'lucide-react'

import React, { useEffect, useState } from 'react'
interface dummy {
  name: string
  username: string
  referal: string
  createdAt: Timestamp
}
export default function Affiliate() {
  const [user, setUser] = useState<dummy[]>([])
  const [username, setUsername] = useState("")
  const user2 = getAuth().currentUser


  useEffect(() => {
    const fetchDatadProfile = async () => {

      if (!user2) return

      const snapuser = await getDoc(doc(db, "users", user2.uid))
      if (!snapuser.exists()) return
      const data = snapuser.data().username
      setUsername(data)
    }

    fetchDatadProfile()

  }, [])



  useEffect(() => {
    const fetchAffiliate = async () => {
      if (!username) return
      console.log(username)
      const snap = query(collection(db, "users"),
        where("sponsorUsername", "==", username))
      const datasnap = await getDocs(snap)
      console.log(datasnap, "ini data snap")
      const data = datasnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data() as dummy
      }))
      console.log(data)
      setUser(data)

    }

    fetchAffiliate()
  }, [username])





  return (
    <div className="p-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">

        {/* Header */}
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Affiliate
          </h2>
          <p className="text-sm text-gray-500">
            Daftar user yang terdaftar
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">

            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Username</th>
                <th className="px-6 py-3">Tanggal</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {user.map((i, k) => (
                <tr
                  key={k}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {i.name}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    @{i.username}
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    {i.createdAt.toDate().toLocaleDateString("id-ID")}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}
