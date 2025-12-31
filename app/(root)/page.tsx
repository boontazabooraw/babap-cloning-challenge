import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import LoopingMarquee from "../components/LoopingMarquee";
import TopCrashGames from "../components/TopCrashGames";
import TopLiveGames from "../components/TopLiveGames";
import TopSlotGames from "../components/TopSlotGames";
import TopTableGames from "../components/TopTableGames";
import Triflex from "../components/Triflex";

export default function Home() {
  return (
    <div className="pt-30">
      <Carousel />
      <LoopingMarquee />
      <Triflex />
      <TopLiveGames />
      <TopCrashGames />
      <TopSlotGames />
      <TopTableGames />
      <Footer />
    </div>
  );
}
