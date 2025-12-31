"use client";

import Image from "next/image";

interface Games {
  filename: string;
}

const games: Games[] = [
  { filename: "imgi_45_26.webp" },
  { filename: "imgi_46_27.webp" },
  { filename: "imgi_47_28.webp" },
  { filename: "imgi_48_29.webp" },
  { filename: "imgi_49_30.webp" },
  { filename: "imgi_50_31.webp" },
  { filename: "imgi_51_32.webp" },
  { filename: "imgi_52_33.webp" },
  { filename: "imgi_53_34.webp" },
  { filename: "imgi_54_35.webp" },
  { filename: "imgi_55_36.webp" },
  { filename: "imgi_56_37.webp" },
];

const TopSlotGames = () => {
  return (
    <section className="h-fit w-full gap-4 px-2 pt-8">
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-bold">Top Slot Games</h1>
        <a href={process.env.NEXT_PUBLIC_AFFLINK}>
          <h2 className="font-semibold text-amber-300">All Games</h2>
        </a>
      </div>
      <div className="mx-auto mt-4 grid w-full max-w-full grid-cols-3 gap-4 md:grid-cols-4 xl:grid-cols-6">
        {games.map((g) => (
          <div key={g.filename} className="">
            <a href={process.env.NEXT_PUBLIC_AFFLINK}>
              <Image
                src={"/05_TopSlotGames/" + g.filename}
                width={300}
                height={300}
                className="rounded-lg"
                alt="Slot Game"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSlotGames;
