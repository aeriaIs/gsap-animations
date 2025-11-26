import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

import AppRouter from "./router";

gsap.registerPlugin(SplitText, ScrollTrigger);

function App() {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  useGSAP(() => {
    gsap.ticker.add((time) => {
      lenis.raf(time * 500); // Convert time from seconds to milliseconds
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  return <AppRouter />;
}

export default App;
