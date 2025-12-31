"use client";

import Image from "next/image";

interface Winner {
  game: string;
  name: string;
  winnings: string;
}

const winners: Winner[] = [
  { game: "imgi_20_1.webp", name: "K*e*****", winnings: "2,800.00" },
  { game: "imgi_20_1.webp", name: "M*a****", winnings: "3,200.00" },
  { game: "imgi_20_1.webp", name: "J*o*****", winnings: "1,750.00" },
  { game: "imgi_20_1.webp", name: "S*r*****", winnings: "3,400.00" },
  { game: "imgi_20_1.webp", name: "D*l*****", winnings: "2,150.00" },
  { game: "imgi_20_1.webp", name: "R*y****", winnings: "1,500.00" },
  { game: "imgi_20_1.webp", name: "L*a****", winnings: "2,000.00" },
  { game: "imgi_20_1.webp", name: "T*s*****", winnings: "3,050.00" },
  { game: "imgi_20_1.webp", name: "B*n***", winnings: "1,550.00" },
  { game: "imgi_20_1.webp", name: "E*c****", winnings: "2,350.00" },
  { game: "imgi_20_1.webp", name: "H*y*****", winnings: "1,800.00" },
  { game: "imgi_20_1.webp", name: "P*l****", winnings: "2,900.00" },
  { game: "imgi_20_1.webp", name: "C*r*****", winnings: "3,150.00" },
  { game: "imgi_20_1.webp", name: "N*h****", winnings: "1,650.00" },
  { game: "imgi_20_1.webp", name: "O*v*****", winnings: "2,450.00" },
  { game: "imgi_20_1.webp", name: "W*m****", winnings: "1,700.00" },
  { game: "imgi_20_1.webp", name: "G*r****", winnings: "2,100.00" },
  { game: "imgi_20_1.webp", name: "F*s*****", winnings: "3,300.00" },
  { game: "imgi_20_1.webp", name: "U*r****", winnings: "1,550.00" },
  { game: "imgi_20_1.webp", name: "Q*n****", winnings: "2,600.00" },
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
