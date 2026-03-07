import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import ComingSoon from "./Sections/ComingSoon";
import FirstVideo from "./Sections/FirstVideo";
import Jason from "./Sections/jason";
import SecondVideo from "./Sections/SecondVideo";
import Lucia from "./Sections/Lucia";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ComingSoon />
      <FirstVideo />
      <Jason />
      <SecondVideo />
      <Lucia />
    </main>
  );
};

export default App;
