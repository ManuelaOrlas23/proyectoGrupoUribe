import React from "react";
import "../../../App.css";
import Carousel from "./Carousel";
import LogosSection from "./LogosSection";

const Home = () => {
  return (
    <>
      <section className="bg-sky-100 py-4 px-6 top-35 w-full h-screen z-20 ">
        <LogosSection />
        <section className="">
          <Carousel />
        </section>
      </section>
    </>
  );
};

export default Home;
