import Navbar from "./Navbar/navbar";
import Hero from "./Hero/hero";
import MidSection1 from "./Mid-Section1/mid_section1";
import Midsection2 from "./Mid-Section2/mid-section2";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MidSection1 />
      <Midsection2 />
    </div>
  );
}

export default Home;
