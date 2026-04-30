import React from "react";
import Image from "next/image";

export default function SejarahKami() {
  return (
    <div id="tentangKami" className="w-full">
      {/* Hero Section */}
      <div className="bg-orange-600 text-white py-10 px-6 text-center">
        <h1 className="text-3xl font-bold">Tentang Quantum Bootcamp</h1>
        <p className="text-lg mt-2">
          Membangun Pendidikan yang bersifat egaliter
        </p>
      </div>

      {/* Gambar dan Konten Berdampingan */}
      <div className="flex flex-wrap md:flex-nowrap bg-white p-6 items-center gap-6">
        {/* Gambar */}

        <div className="relative w-full md:w-1/3 aspect-video px-1">
          <Image
            src="/images/12.png"
            alt="Quantum Background"
            fill
            className="object-full rounded"
            priority
          />
        </div>


        {/* Teks */}
        <div className="w-full md:w-1/2 text-black">
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quibusdam laboriosam fuga enim quidem beatae debitis. Ab earum, ad temporibus magni molestias atque cumque nam numquam id dolorem illo modi pariatur mollitia aperiam iusto ullam aliquid cupiditate amet maiores natus voluptatibus porro. Tempore veniam assumenda ex ipsa fuga voluptates corrupti, iusto debitis! Ipsam, id quasi! Nisi molestias accusamus accusantium, blanditiis deserunt pariatur numquam quod sunt minus excepturi harum veritatis laudantium architecto doloremque, aperiam dolor tenetur quia doloribus velit aut distinctio obcaecati perspiciatis! Tempora illo unde adipisci rem corrupti enim cumque ipsum hic! Vel et, vero aspernatur magni nesciunt consequatur porro eligendi quisquam corporis eum. Hic, perspiciatis quo quibusdam deserunt debitis consequatur facere non aliquam doloremque eveniet tenetur quia explicabo cumque dolorem repellat reiciendis ducimus, impedit adipisci nihil est illum illo!
          </p>
        </div>
      </div>
    </div>
  );
}
