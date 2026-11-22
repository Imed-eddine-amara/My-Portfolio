import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light dark:fill-dark"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

const Details = ({ position, company, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg dark:text-light">
          {position}&nbsp;
          <span className="text-primary dark:text-primaryDark">
            @{company}
          </span>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <ul className="font-medium w-full mt-2 list-disc list-outside ml-4 space-y-2 dark:text-light/90 md:text-sm">
          {work.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 md:my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light md:text-6xl xs:text-4xl md:mb-16">
        Industrial Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* Animated Vertical Line */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Embedded Systems and IoT Intern (ColdGuard)"
            company="Fréquence Santec"
            time="Jun 2026 - Aug 2026"
            address="Tunisia / Remote"
            work={[
              "Developed ESP32 firmware in C/ESP-IDF with FreeRTOS multi-core task scheduling (xTaskCreatePinnedToCore) integrating BLE GATT provisioning, circular binary telemetry buffering in SPIFFS, and AWS IoT Core connectivity.",
              "Implemented zero-touch AWS IoT Fleet Provisioning with claim certificates and device-specific X.509 credentials stored in NVS for mutual-TLS (mTLS) authenticated MQTT communication.",
              "Engineered remote dual-bank A/B FOTA firmware updates via AWS IoT Jobs and HTTPS S3 streaming with image integrity validation and automatic rollback to the active partition upon failed self-tests.",
              "Automated firmware build/release pipelines with GitHub Actions CI, and built Python test scripts integrated with a FastAPI and PostgreSQL/Supabase backend featuring an MCP conversational query interface.",
            ]}
          />

          <Details
            position="Embedded Systems & PCB Design Intern"
            company="RoboCare Startup"
            time="Jan 2026 - Jun 2026"
            address="Tunisia"
            work={[
              "Conducted hardware bring-up and board validation for an autonomous industrial 868 MHz LoRa IoT node based on the RAK3172 module (STM32WLE5CC ARM Cortex-M4 SoC) using digital oscilloscope, logic analyzer, and multimeter.",
              "Redesigned power architecture with an SGM6036 hysteretic buck converter, reducing regulator quiescent current by over 99% (from 10 mA down to 450 nA) for low-power battery/solar operation.",
              "Designed and routed a 4-layer impedance-controlled PCB in Altium Designer integrating a THVD2419 RS-485 transceiver with ±70V fault protection, 64 Mbit SPI NOR Flash, and TI BQ24074 solar/battery power management with Dynamic Power-Path Management (DPPM).",
              "Connected board-level hardware decisions with firmware requirements for LoRaWAN communication, low-power sleep modes, and sensor data acquisition over a 100m industrial bus.",
            ]}
          />

          <Details
            position="Computer Vision & Embedded Systems Intern"
            company="NB Security"
            time="Jun 2025 - Jul 2025"
            address="Tunisia"
            work={[
              "Prototyped a vision-based intelligent access control and facial recognition system using an ESP32-CAM for video capture and Raspberry Pi 4 for edge processing.",
              "Implemented face detection and recognition using OpenCV in Python, achieving >95% recognition accuracy with ~0.8s detection-to-unlock latency over 100 validation cycles.",
              "Interfaced Raspberry Pi GPIO with 12V electromagnetic strike lock actuator circuitry, implementing flyback diode protection, 3.3V relay actuation, and 10s automatic unlock timer with fail-secure safety logic.",
            ]}
          />
        </ul>
      </div>
    </div>
  );
}
