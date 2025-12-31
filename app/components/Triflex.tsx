"use client";

import Image from "next/image";
import LiveWinsMarquee from "./LiveWinsMarquee";

const Triflex = () => {
  return (
    <section className="flex h-fit w-full justify-center gap-4 px-2">
      <div className="relative min-h-70 w-full max-w-125 rounded-xl">
        <a role="button" href={process.env.NEXT_PUBLIC_AFFLINK}>
          <div className="absolute inset-0 z-20 h-full w-full bg-radial from-transparent to-black opacity-20"></div>
          <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 transform">
            <div className="flex flex-col items-center gap-2">
              <h1 className="bg-linear-to-b from-yellow-50 via-yellow-200 to-amber-400 bg-clip-text text-xl font-semibold tracking-tight text-transparent">
                Last Week Pay Out
              </h1>
              <div className="bg-background rounded-4xl border-2 border-[#f6cb55] px-6 py-3 shadow-[0_0_10px_1px_#f6cb55]">
                <h1 className="bg-linear-to-b from-yellow-50 via-yellow-300 to-amber-500 bg-clip-text text-2xl font-semibold tracking-wide text-nowrap text-transparent">
                  INR 793,418.40
                </h1>
              </div>
            </div>
          </div>
          <Image
            src={"/02_Trio_Flex/imgi_20_1.webp"}
            fill
            priority
            alt="Fire Hopper"
            className="-z-10 rounded-xl brightness-75"
          />
        </a>
      </div>

      <div className="relative min-h-70 w-full max-w-125 rounded-xl">
        <a href={process.env.NEXT_PUBLIC_AFFLINK}>
          <div className="absolute bottom-5 left-0 z-20 px-5">
            <h1 className="text-xl font-bold">JeetWin Exclusive Live Games</h1>
          </div>
          <div className="h-fullZ absolute inset-0 z-10 w-full rounded-xl bg-radial from-transparent via-transparent to-black/80"></div>
          <Image
            src={"/02_Trio_Flex/imgi_21_2.webp"}
            fill
            priority
            alt="Fire Hopper"
            className="rounded-xl"
          />
        </a>
      </div>

      <div className="flex min-h-70 w-full max-w-125 flex-col overflow-y-hidden rounded-xl border border-amber-300">
        <div className="bg-background z-10 flex flex-row items-center gap-2 px-3 pt-2 pb-1">
          <h1 className="text-xl font-bold">Live Wins</h1>
          <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-yellow-400"></div>
        </div>

        <div className="relative h-full w-full">
          <LiveWinsMarquee />
        </div>
      </div>
    </section>
  );
};

export default Triflex;
