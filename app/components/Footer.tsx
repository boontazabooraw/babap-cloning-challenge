"use client";

import Image from "next/image";

interface ImagePaths {
  filename: string;
}

const socials: ImagePaths[] = [
  { filename: "imgi_71_3.webp" },
  { filename: "imgi_72_4.webp" },
  { filename: "imgi_73_5.webp" },
  { filename: "imgi_74_6.webp" },
  { filename: "imgi_75_7.webp" },
  { filename: "imgi_76_8.webp" },
];

const paymentMethods: ImagePaths[] = [
  { filename: "imgi_77_9.svg" },
  { filename: "imgi_78_10.svg" },
  { filename: "imgi_79_11.svg" },
  { filename: "imgi_80_12.svg" },
  { filename: "imgi_81_13.svg" },
];

const licences: ImagePaths[] = [
  { filename: "imgi_69_1.svg" },
  { filename: "imgi_70_2.svg" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary w-full h-full px-2 py-2.5 lg:py-12.5">
      <div className="flex w-full">
        <div className="flex flex-col justify-between">
          <div className="max-w-[90%]">
            <h2 className="text-xl font-semibold">About JeetWin</h2>
            <p className="font-roboto py-3 text-justify text-sm/8">
              JeetWin was established in 2017 and operated under a Curacao
              gaming license with more than 2 million users. JeetWin is one of
              Asia&apos;s most trusted and leading online casinos and sports
              betting platforms. JeetWin offers a wide selection of slot games,
              live casinos, lotteries, sportsbooks, sports exchanges, and
              e-sports. Members who sign up will receive 5 free spins and have a
              chance to win exciting prizes.
            </p>
          </div>
          <div className="socials-wrapper w-full">
            <h2 className="font-bold">Follow Us</h2>
            <div className="flex gap-2">
              {socials.map((social) => (
                <Image
                  key={social.filename}
                  src={"/09_Socials/" + social.filename}
                  width={60}
                  height={60}
                  alt="Social"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-5">
          <div className="flex flex-row gap-20">
            <div className="flex flex-col gap-5">
              <h2 className="text-xl font-semibold">About</h2>
              <a href={process.env.NEXT_PUBLIC_AFFLINK}>
                <span className="font-roboto text-xs font-semibold">
                  JW Points
                </span>
              </a>
              <a href={process.env.NEXT_PUBLIC_AFFLINK}>
                <span className="font-roboto text-xs font-semibold">VIP</span>
              </a>
              <a href={process.env.NEXT_PUBLIC_AFFLINK}>
                <span className="font-roboto text-xs font-semibold">Blog</span>
              </a>
              <a href={process.env.NEXT_PUBLIC_AFFLINK}>
                <span className="font-roboto text-xs font-semibold">
                  Affiliate Program
                </span>
              </a>
              <a href={process.env.NEXT_PUBLIC_AFFLINK}>
                <span className="font-roboto text-xs font-semibold">
                  Contact Us
                </span>
              </a>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-xl font-semibold">Info</h2>
              <a href={process.env.NEXT_PUBLIC_AFFLINK}>
                <span className="font-roboto text-xs font-semibold">
                  Terms & Conditions
                </span>
              </a>
              <a href={process.env.NEXT_PUBLIC_AFFLINK}>
                <span className="font-roboto text-xs font-semibold">FAQ</span>
              </a>
              <a href={process.env.NEXT_PUBLIC_AFFLINK}>
                <span className="font-roboto text-xs font-semibold">
                  Privacy Policy
                </span>
              </a>
              <a href={process.env.NEXT_PUBLIC_AFFLINK}>
                <span className="font-roboto text-xs font-semibold">
                  Disconnection Policy
                </span>
              </a>
              <a href={process.env.NEXT_PUBLIC_AFFLINK}>
                <span className="font-roboto text-xs font-semibold">
                  Responsible Gaming
                </span>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Licenses</h2>
              <div className="flex flex-col gap-2">
                {licences.map((license) => (
                  <Image
                    key={license.filename}
                    src={"/08_Licenses/" + license.filename}
                    width={60}
                    height={60}
                    alt="License"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="socials-wrapper w-full mt-10">
            <h2 className="font-semibold">Payment Methods</h2>
            <div className="flex w-full gap-2">
              {paymentMethods.map((pmethod) => (
                <Image
                  key={pmethod.filename}
                  src={"/07_PaymentMethods/" + pmethod.filename}
                  width={80}
                  height={80}
                  alt="Payment Method"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-5">
        <h3 className=" font-semibold">Copyright 2025 | JeetWin | All Right Reserved</h3>
      </div>
    </footer>
  );
};

export default Footer;
