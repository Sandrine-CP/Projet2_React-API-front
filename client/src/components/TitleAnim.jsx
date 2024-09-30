import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./TitleAnim.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function TitleAnim() {
  const titleRef = useRef(null);
  // useEffect(() => {
  //   const letters = titleRef.current;
  // });

  const onLoad = () => {
    gsap
      .timeline({})
      .fromTo(
        ".letter",
        {
          x: -200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 2,
          stagger: 0.33,
          delay: 0.7,
        }
      )
      .to(".title", {
        y: 35,
        delay: 0.7,
      })
      .to(".letter", {
        x: -titleRef.current.clientWidth,
        delay: 1,
        duration: 2,
        rotate: -360,
      });
  };

  useEffect(() => {
    onLoad();
  });

  return (
    <div className="titleAnimContainer">
      <h1 className="title" ref={titleRef}>
        <span className="letter"> </span>
        <span className="letter"> </span>
        <span className="letter">3</span>
        <span className="letter">2</span>
        <span className="letter">1</span>
        <span className="letter"> .</span>
        <span className="letter"> .</span>
        <span className="letter"> .</span>
      </h1>
    </div>
  );
}
