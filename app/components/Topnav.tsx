"use client";

import Image from "next/image";

const Topnav = () => {
  return (
    <header className="sticky z-50 w-full">
      <div className="topside mx-auto flex w-full items-center justify-between py-2">
        <div className="logo-left">
          <Image
            src="/00_Nav/imgi_1_logo.svg"
            width={100}
            height={100}
            className="w-21.25"
            alt="Nav Logo"
          />
        </div>
        <div className="login-right flex gap-3">
          <a role="button" href="http://tekkabuzz.com/af/NV0RcqxB/jeetwin">
            <div className="flex h-10 w-22.5 items-center justify-center rounded bg-[#a0cf2f] xl:h-12.5 xl:w-35">
              <span className="font-bold">Login</span>
            </div>
          </a>
          <a role="button" href="http://tekkabuzz.com/af/NV0RcqxB/jeetwin">
            <div className="flex h-10 w-22.5 items-center justify-center rounded bg-[#F54927] xl:h-12.5 xl:w-35">
              <span className="font-bold">Sign Up</span>
            </div>
          </a>{" "}
          <a role="button" href="http://tekkabuzz.com/af/NV0RcqxB/jeetwin">
            <div className="flex h-10 w-22.5 items-center justify-center rounded bg-secondary xl:h-12.5 xl:w-35">
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
        </div>
      </div>
      <nav className="bg-secondary">
        <a href="">
          <div>
            <span>Exchange</span>
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Topnav;
