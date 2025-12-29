import Carousel from "../components/Carousel";
import LoopingMarquee from "../components/LoopingMarquee";
import Topnav from "../components/Topnav";

export default function Home() {
  return (
    <div>
      <Topnav />
      <Carousel />
      <LoopingMarquee />
    </div>
  );
}
