import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import ComingSoon from "./Sections/ComingSoon";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ComingSoon />
    </main>
  );
};

export default App;
