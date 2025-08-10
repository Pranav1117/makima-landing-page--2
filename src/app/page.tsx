import BackgroundTextContainer from "./components/BackgroundTextContainer";
import Baner from "./components/Baner";
import BgImage from "./components/BgImage";
import MainImage from "./components/MainImage";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <MainImage />
      <BackgroundTextContainer />
      <Baner />
      <BgImage />
    </div>
  );
}
