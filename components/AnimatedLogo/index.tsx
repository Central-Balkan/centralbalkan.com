"use client";
import ReactVivus from "react-vivus";

const AnimatedLogo = () => (
  <ReactVivus
    id="foo"
    option={{
      file: "/logo_light.svg",
      type: "oneByOne",
      animTimingFunction: "EASE",
      duration: 250,
      onReady: console.log,
    }}
    style={{ height: "300px", width: "250px" }}
    callback={console.log}
  />
);

export default AnimatedLogo;
