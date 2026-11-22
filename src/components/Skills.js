import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

export default function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center dark:text-light md:text-6xl md:mt-32">
        Skills Constellation
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        {/* Core Center Node */}
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2 text-center"
          whileHover={{ scale: 1.05 }}
        >
          Firmware &<br />Systems
        </motion.div>

        {/* Inner Orbit: Languages & RTOS */}
        <Skill name="C / C++" x="-20vw" y="-2vw" />
        <Skill name="Python" x="-6vw" y="-10vw" />
        <Skill name="FreeRTOS" x="20vw" y="6vw" />
        <Skill name="Zephyr RTOS" x="0vw" y="12vw" />
        <Skill name="STM32 (ARM)" x="-19vw" y="-14vw" />
        <Skill name="ESP32 / ESP-IDF" x="16vw" y="-12vw" />

        {/* Middle Orbit: Hardware, PCB & Linux */}
        <Skill name="Altium Designer" x="32vw" y="-5vw" />
        <Skill name="4-Layer PCB" x="-26vw" y="18vw" />
        <Skill name="Embedded Linux" x="-38vw" y="-4vw" />
        <Skill name="Buildroot (AArch64)" x="-14vw" y="2vw" />
        <Skill name="MATLAB / Simulink" x="25vw" y="18vw" />
        <Skill name="SolidWorks CAD" x="10vw" y="23vw" />

        {/* Outer Orbit: Cloud, Protocols & Edge */}
        <Skill name="AWS IoT Core" x="-10vw" y="-22vw" />
        <Skill name="RS-485 / Modbus" x="28vw" y="-18vw" />
        <Skill name="LoRa & LoRaWAN" x="-32vw" y="9vw" />
        <Skill name="OpenCV Edge AI" x="38vw" y="8vw" />
        <Skill name="Git / GitHub CI" x="0vw" y="-23vw" />
      </div>
    </>
  );
}
