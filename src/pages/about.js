import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default function About() {
  return (
    <>
      <Head>
        <title>About Imed Eddine Amara | Embedded Systems & Hardware Engineer</title>
        <meta
          name="description"
          content="Biography, technical skills constellation, industrial experience and academic curriculum of Imed Eddine Amara."
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose & Precision"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            {/* Biography Column */}
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 tracking-wider">
                Biography
              </h2>
              <p className="font-medium text-dark/85 dark:text-light/85 leading-relaxed">
                Hi, I&apos;m <span className="font-semibold text-dark dark:text-light">Imed Eddine Amara</span>, an Embedded Systems &amp; IoT Engineer with a deep focus on hardware-firmware co-design, real-time operating systems, and autonomous robotics. Currently completing my final engineering year at the Higher Institute of Computer Science and Multimedia of Gabes (ISIMG), University of Gabes, I am seeking a 6-month Final Year Project (PFE) internship starting February/March 2027.
              </p>
              <p className="my-4 font-medium text-dark/85 dark:text-light/85 leading-relaxed">
                Across three industrial internships, I have bridged physical hardware and cloud architectures. At <span className="font-semibold text-dark dark:text-light">Fréquence Santec</span>, I architected dual-core ESP32 firmware with zero-touch AWS IoT Fleet Provisioning, mutual-TLS (mTLS) authentication, and dual-bank A/B FOTA updates. At <span className="font-semibold text-dark dark:text-light">RoboCare</span>, I engineered a 4-layer impedance-controlled LoRa PCB in Altium Designer, achieving a 99% reduction in regulator quiescent current down to 450 nA. At <span className="font-semibold text-dark dark:text-light">NB Security</span>, I prototyped edge computer vision with OpenCV on Raspberry Pi.
              </p>
              <p className="font-medium text-dark/85 dark:text-light/85 leading-relaxed">
                Whether simulating non-linear quadrotor dynamics with cascade PID control in MATLAB/Simulink, modeling robotic arm linkages in SolidWorks 3D CAD, cross-compiling custom Linux daemons with Buildroot, or validating circuits with an oscilloscope and logic analyzer, I bring rigorous engineering principles, curiosity, and dependable execution to every system.
              </p>
            </div>

            {/* Profile Photo Column */}
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <div className="relative w-full aspect-[2/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/profile/about_photo.png"
                  alt="Imed Eddine Amara"
                  fill
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* Metric Counters Column */}
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Industrial Internships
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={11} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Engineered Systems
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2027} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  PFE Graduation Year
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
