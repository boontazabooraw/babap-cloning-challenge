"use client";

import Image from "next/image";

interface Winner {
  id: number;
  game: string;
  name: string;
  winnings: string;
}

const winners: Winner[] = [
  { id: 1, game: "imgi_20_1.webp", name: "K*e*****", winnings: "2,800.00" },
  { id: 2, game: "imgi_21_2.webp", name: "M*a****", winnings: "3,200.00" },
  { id: 3, game: "imgi_22_4.webp", name: "J*o*****", winnings: "1,750.00" },
  { id: 4, game: "imgi_23_6.webp", name: "S*r*****", winnings: "3,400.00" },
  { id: 5, game: "imgi_24_3.webp", name: "D*l*****", winnings: "2,150.00" },
  { id: 6, game: "imgi_25_5.webp", name: "R*y****", winnings: "1,500.00" },
  { id: 7, game: "imgi_26_7.webp", name: "L*a****", winnings: "2,000.00" },
  { id: 8, game: "imgi_27_8.webp", name: "T*s*****", winnings: "3,050.00" },
  { id: 9, game: "imgi_28_9.webp", name: "B*n***", winnings: "1,550.00" },
  { id: 10, game: "imgi_29_10.webp", name: "E*c****", winnings: "2,350.00" },
  { id: 11, game: "imgi_30_11.webp", name: "H*y*****", winnings: "1,800.00" },
  { id: 12, game: "imgi_31_12.webp", name: "P*l****", winnings: "2,900.00" },
  { id: 13, game: "imgi_32_13.webp", name: "C*r*****", winnings: "3,150.00" },
  { id: 14, game: "imgi_33_14.webp", name: "N*h****", winnings: "1,650.00" },
  { id: 15, game: "imgi_34_15.webp", name: "O*v*****", winnings: "2,450.00" },
  { id: 16, game: "imgi_35_16.webp", name: "W*m****", winnings: "1,700.00" },
  { id: 17, game: "imgi_36_17.webp", name: "G*r****", winnings: "2,100.00" },
];

const LiveWinsMarquee = () => {
  return (
    <>
      <div className="live-wins absolute flex w-full flex-col gap-5 px-5 text-nowrap">
        <div className="h-15 rounded-full bg-amber-100 text-center text-black">
          Card 1
        </div>
        <div className="h-15 rounded-full bg-amber-100 text-center text-black">
          Card 2
        </div>
        <div className="h-15 rounded-full bg-amber-100 text-center text-black">
          Card 3
        </div>
        <div className="h-15 rounded-full bg-amber-100 text-center text-black">
          Card 4
        </div>
        <div className="h-15 rounded-full bg-amber-100 text-center text-black">
          Card 5
        </div>
        <div className="h-15 rounded-full bg-amber-100 text-center text-black">
          Card 6
        </div>
      </div>
    </>
  );
};

export default LiveWinsMarquee;
