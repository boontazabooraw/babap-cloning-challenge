"use client";

import Image from "next/image";

interface Games {
  filename: string;
}

const games: Games[] = [
  { filename: "imgi_37_18.webp" },
  { filename: "imgi_38_19.webp" },
  { filename: "imgi_39_20.webp" },
  { filename: "imgi_40_21.webp" },
  { filename: "imgi_41_22.webp" },
  { filename: "imgi_42_23.webp" },
  { filename: "imgi_43_24.webp" },
  { filename: "imgi_44_25.webp" },
];

const TopCrashGames = () => {
  return (
    <section className="h-fit w-full gap-4 px-2 pt-8">
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-bold">Top Crash Games</h1>
        <a href={process.env.NEXT_PUBLIC_AFFLINK}>
          <h2 className="font-semibold text-amber-300">All Games</h2>
        </a>
      </div>
      <div className="mx-auto mt-4 grid w-full max-w-full grid-cols-3 gap-4 md:grid-cols-4 xl:grid-cols-6">
        {games.map((g) => (
          <div key={g.filename} className="">
            <a href={process.env.NEXT_PUBLIC_AFFLINK}>
              <Image
                src={"/04_TopCrashGames/" + g.filename}
                width={300}
                height={300}
                className="rounded-lg"
                alt="Crash Game"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCrashGames;
