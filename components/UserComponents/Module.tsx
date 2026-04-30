"use client";

import React, { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

type ModuleType = {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  thumbnail?: string;
};

export default function Module() {
  const [modules, setModules] = useState<ModuleType[]>([]);

  useEffect(() => {
    const fetchModules = async () => {
      const snap = await getDocs(collection(db, "Module"));
      const data = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ModuleType[];

      setModules(data);
    };

    fetchModules();
  }, []);

  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        📚 Module Pembelajaran
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {modules.map((mod, k) => (
          <div
            key={k}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            {/* Thumbnail */}
            <div className="h-40 bg-gray-200">
              {mod.thumbnail ? (
                <img
                  src={mod.thumbnail}
                  className="w-full h-full object-cover"
                  alt=""
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  No Image
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="font-semibold text-gray-800">
                {mod.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {mod.description}
              </p>

              {/* Action */}
       <button
  onClick={() => {
    const viewer = `https://docs.google.com/gview?url=${mod.fileUrl}&embedded=true`;
    window.open(viewer, "_blank");
  }}
  className="inline-block mt-4 text-sm bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
>
  Lihat Materi
</button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {modules.length === 0 && (
        <div className="text-center text-gray-400 mt-10">
          Belum ada module
        </div>
      )}
    </div>
  );
}