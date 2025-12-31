import Carousel from "../components/Carousel";
import LoopingMarquee from "../components/LoopingMarquee";
import Topnav from "../components/Topnav";
import Triflex from "../components/Triflex";

export default function Home() {
  return (
    <div>
      <Topnav />
      <Carousel />
      <LoopingMarquee />
      <Triflex />
    </div>
  );
}
