import { db } from '@/lib/firebase'
import { fetchWhere } from '@/service/FetchWhere'
import { AffiliateTypes } from '@/Types/Affiliate'
import { getAuth } from 'firebase/auth'
import {  doc, getDoc,} from 'firebase/firestore'
import { Key } from 'lucide-react'

import React, { useEffect, useState } from 'react'

export default function Affiliate() {
  const [user, setUser] = useState<AffiliateTypes[]>([])
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
    const fetchData = async () => {
      const data = await fetchWhere({
        QueryData: username,
        RefereceQuery: "sponsorUsername",
        DbReference: "users"
      })
      if(!data) return
      setUser(data)
      console.log(data, "ini duatas")
    }
    fetchData()



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
