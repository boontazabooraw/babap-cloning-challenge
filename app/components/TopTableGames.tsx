import Image from "next/image";

interface Games {
  filename: string;
}

const games: Games[] = [
  { filename: "imgi_57_38.webp" },
  { filename: "imgi_58_39.webp" },
  { filename: "imgi_59_40.webp" },
  { filename: "imgi_60_41.webp" },
  { filename: "imgi_61_42.webp" },
  { filename: "imgi_62_43.webp" },
  { filename: "imgi_63_44.webp" },
  { filename: "imgi_64_45.webp" },
  { filename: "imgi_65_46.webp" },
  { filename: "imgi_66_47.webp" },
  { filename: "imgi_67_48.webp" },
  { filename: "imgi_68_49.webp" },
];

const TopTableGames = () => {
  return (
    <section className="h-fit w-full gap-4 px-2 pt-8">
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-bold">Top Table Games</h1>
        <a href={process.env.NEXT_PUBLIC_AFFLINK}>
          <h2 className="font-semibold text-amber-300">All Games</h2>
        </a>
      </div>
      <div className="mx-auto mt-4 grid w-full max-w-full grid-cols-3 gap-4 md:grid-cols-4 xl:grid-cols-6">
        {games.map((g) => (
          <div key={g.filename} className="relative h-35">
            <a href={process.env.NEXT_PUBLIC_AFFLINK}>
              <Image
                src={"/06_TopTableGames/" + g.filename}
                fill
                style={{objectFit: "cover"}}
                className="rounded-lg"
                alt="Table Game"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopTableGames;
