import { db } from '@/lib/firebase'
import { collection, query, where } from 'firebase/firestore'
import { Key } from 'lucide-react'

import React, { useEffect, useState } from 'react'
interface dummy {
  name: string
  username: string
  referal: string
  date: string
}
export default function Affiliate() {
  const [user, setUser] = useState<dummy[]>([])

  const currentUser = "budi211"
  const now = new Date();
  const hariSekarang = now.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });


  const dummyAffilate = [
    {
      name: 'apri',
      username: "apri99",
      referal: "budi211",
      date: hariSekarang

    },
    {
      name: "budi",
      username: "bud211",
      referal: "root",
      date: hariSekarang,
    },
    {
      name: "yanti",
      username: "yanti001",
      referal: "budi211",
      date: hariSekarang,
    },
    {
      name: "ani",
      username: "ani6",
      referal: "budi211",
      date: hariSekarang,
    },
  ]

  useEffect(() => {
    const result = dummyAffilate.filter((item) => item.referal == currentUser)
    setUser(result)
    console.log(result)
  }, [])





  return (
  <div className="p-4">
  <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
    
    {/* Header */}
    <div className="p-4 border-b">
      <h2 className="text-lg font-semibold text-gray-800">
        Data Pengguna
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
                {i.date}
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
