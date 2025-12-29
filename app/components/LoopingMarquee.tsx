"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const LoopingMarquee = () => {
  return (
    <div className="flex px-2 gap-2 py-5">
      <Image
        src="volume-up-svgrepo-com.svg"
        width={30}
        height={30}
        className=""
        alt="Idk man"
      />
      <Marquee>
        <span className="font-semibold text-amber-300">
          Game Platform Temporary Maintenance Announcement::
        </span>
        <span className="font-semibold">
          QS game platform will be temporarily maintained. Maintenance time will
          be carried out from now on. If there is a confirmed maintenance time,
          we will inform you again. &nbsp;&nbsp;&nbsp;
        </span>
      </Marquee>
    </div>
  );
};

export default LoopingMarquee;
