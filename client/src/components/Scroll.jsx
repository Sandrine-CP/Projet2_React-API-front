import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleAnim from "./TitleAnim";
import "./Scroll.css";

gsap.registerPlugin(ScrollTrigger);

function Scroll() {
  const sectionsRef = useRef([]);

  useGSAP(() => {
    const sections = sectionsRef.current;

    sections.forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          pin: false,
          scrub: 1,
        },
      });
    });
  }, []);

  const setRef = (el, index) => {
    sectionsRef.current[index] = el;
  };

  return (
    <div className="container">
      <TitleAnim />
      {["take-off", "ready", "to", "visit", "galaxies"].map((name, index) => (
        <section
          className={`section ${name} bg`}
          ref={(el) => setRef(el, index)}
          key={name}
        >
          <div className="bg">
            <h2 className="section-heading">{name}</h2>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Scroll;
