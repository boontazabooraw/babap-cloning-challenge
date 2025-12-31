"use client";

import Image from "next/image";

const navLinks: string[] = [
  "Exchange",
  "Sports",
  "Casino",
  "Crash",
  "Table",
  "Slots",
  "Fishing",
  "Arcade",
  "Cock Fight",
  "Racing",
  "Lottery",
  "Fantasy",
];

const Topnav = () => {
  return (
    <header className="fixed z-50 w-full mb-50 bg-background">
      <div className="topside mx-auto flex w-full max-w-400 items-center justify-between px-2 py-4">
        <div className="logo-left">
          <a href={process.env.NEXT_PUBLIC_AFFLINK}>
            <Image
              src="/00_Nav/imgi_1_logo.svg"
              width={100}
              height={100}
              className="w-21.25"
              alt="Nav Logo"
            />
          </a>
        </div>
        <div className="login-right flex gap-3">
          <input
            type="text"
            placeholder="Username"
            className="bg-secondary hidden h-12.5 w-50 rounded p-2 font-bold outline-none xl:block"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-secondary hidden h-12.5 w-50 rounded p-2 font-bold outline-none xl:block"
          />
          <a role="button" href={process.env.NEXT_PUBLIC_AFFLINK}>
            <div className="flex h-10 w-22.5 items-center justify-center rounded bg-[#a0cf2f] xl:h-12.5 xl:w-35">
              <span className="font-bold">Login</span>
            </div>
          </a>
          <a role="button" href={process.env.NEXT_PUBLIC_AFFLINK}>
            <div className="flex h-10 w-22.5 items-center justify-center rounded bg-[#F54927] xl:h-12.5 xl:w-35">
              <span className="font-bold">Sign Up</span>
            </div>
          </a>
          <a role="button" href={process.env.NEXT_PUBLIC_AFFLINK}>
            <div className="bg-secondary flex h-full w-20 items-center justify-center gap-2 rounded">
              <Image
                src="/00_Nav/imgi_2_flag.svg"
                width={100}
                height={100}
                className="w-7"
                alt="Nav Country"
              />
              <span className="text-[14px]">▼</span>
            </div>
          </a>
          <a role="button" href={process.env.NEXT_PUBLIC_AFFLINK}>
            <div className="bg-secondary flex h-full w-12 items-center justify-center rounded">
              <Image
                src="/00_Nav/imgi_3_menu.png"
                width={100}
                height={100}
                className="w-7"
                alt="Nav Country"
              />
            </div>
          </a>
        </div>
      </div>
      <nav className="bg-secondary flex w-full flex-row gap-7 border-y border-white/10 px-3 py-1">
        <div className="left-nav flex flex-row items-center gap-4">
          <a role="button" href="">
            <Image
              src="/00_Nav/home.png"
              width={100}
              height={100}
              className="w-7"
              alt="Nav Country"
            />
          </a>
          <a role="button" href="">
            <Image
              src="/00_Nav/si.png"
              width={100}
              height={100}
              className="w-5"
              alt="Nav Country"
            />
          </a>
          <a role="button" href="">
            <Image
              src="/00_Nav/search.png"
              width={100}
              height={100}
              className="w-7"
              alt="Nav Country"
            />
          </a>
        </div>
        <div className="mx-auto flex h-full max-h-13 min-h-11.5 w-full max-w-400 flex-row items-center justify-center gap-2 overflow-y-auto">
          {navLinks.map((rinku) => (
            <div
              key={rinku}
              className="flex w-full cursor-grab px-2 text-nowrap"
            >
              <a href={process.env.NEXT_PUBLIC_AFFLINK}>
                <span className="text-[16px] font-bold">{rinku}</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mx-auto flex h-full max-h-13 min-h-11.5  flex-row items-center justify-center gap-2 ">
          <div className="flex w-full cursor-grab px-2 text-nowrap">
            <a href={process.env.NEXT_PUBLIC_AFFLINK}>
              <span className="text-[16px] font-bold">Promotion</span>
            </a>
          </div>
          <div className="flex w-full cursor-grab px-2 text-nowrap">
            <a href={process.env.NEXT_PUBLIC_AFFLINK}>
              <span className="text-[16px] font-bold">VIP</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Topnav;
