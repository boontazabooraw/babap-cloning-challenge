"use client";

import Image from "next/image";

interface Games {
  filename: string;
}

const games: Games[] = [
  { filename: "imgi_20_1.webp" },
  { filename: "imgi_21_2.webp" },
  { filename: "imgi_22_4.webp" },
  { filename: "imgi_23_6.webp" },
  { filename: "imgi_24_3.webp" },
  { filename: "imgi_25_5.webp" },
  { filename: "imgi_26_7.webp" },
  { filename: "imgi_27_8.webp" },
  { filename: "imgi_28_9.webp" },
  { filename: "imgi_29_10.webp" },
  { filename: "imgi_30_11.webp" },
  { filename: "imgi_31_12.webp" },
  { filename: "imgi_32_13.webp" },
  { filename: "imgi_33_14.webp" },
  { filename: "imgi_34_15.webp" },
  { filename: "imgi_35_16.webp" },
  { filename: "imgi_36_17.webp" },
];

const TopLiveGames = () => {
  return (
    <section className="h-fit w-full gap-4 px-2 pt-12">
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-bold">Top Live Games</h1>
        <a href={process.env.NEXT_PUBLIC_AFFLINK}>
          <h2 className="font-semibold text-amber-300">All Games</h2>
        </a>
      </div>
      <div className="mx-auto mt-4 grid w-full max-w-full grid-cols-3 gap-4 md:grid-cols-4 xl:grid-cols-6">
        {games.map((g) => (
          <div key={g.filename} className="">
            <a href={process.env.NEXT_PUBLIC_AFFLINK}>
              <Image
                src={"/03_TopTopLiveGames/" + g.filename}
                width={300}
                height={300}
                className="rounded-lg"
                alt="Live Game"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopLiveGames;
