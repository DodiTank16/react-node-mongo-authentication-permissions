import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import { ReactTyped } from "react-typed";
import logo from "../assets/images/tringle-logo.png";
import Layout from "../components/Header/Index";

const Welcome = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <>
      <Layout>
        {/* <div className="container"> */}
        <div
          className="p-12 md:flex sm:block relative justify-center"
          style={{ prespective: 2000 }}>
          <div className="m-auto w-full xl:w-9/12 md: lg:w-6/12 md:w-auto sm:w-full p-2">
            <h3
              className="content-one"
              style={{
                mr: 2,
                paddingTop: 1.2,
                fontFamily: "Eczar",
                fontWeight: 400,
                letterSpacing: ".2rem",
                color: "white",
                textDecoration: "none",
                textAlign: "center",
              }}>
              Hi, I am Dodi.
            </h3>

            <h3
              style={{
                mr: 2,
                fontFamily: "Kdam Thmor Pro",
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
                textAlign: "center",
                wordBreak: "break-word",
              }}>
              {/* A creative <span style={{ whiteSpace: "pre" }} ref={el} /> */}
              <ReactTyped
                strings={[
                  "<strong>Developer</strong>",
                  "<strong>Designer</strong>",
                  "<strong>Music Producer</strong>",
                ]}
                typeSpeed={100}
                backSpeed={100}
                backDelay={999}
                loop
                style={{ color: "while" }}></ReactTyped>
            </h3>
          </div>

          <div
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.18}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
            className="w-full xl:w-3/12 md:w-6/12 text-center relative bg-gray-900 p-2 inline-block cursor-grab">
            <motion.img
              src={logo}
              alt=""
              style={{ x, y, rotateX, rotateY, z: 10000 }}
              drag
              dragElastic={0.18}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing" }}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Welcome;
