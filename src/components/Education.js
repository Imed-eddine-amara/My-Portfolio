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

const Details = ({ type, time, place, info, courses }) => {
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
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full mt-2 dark:text-light/90 md:text-sm">
          {info}
        </p>
        {courses && courses.length > 0 && (
          <div className="mt-3">
            <span className="font-semibold text-sm text-dark dark:text-light block mb-1">
              Key Academic Coursework & Certified Marks:
            </span>
            <div className="flex flex-wrap gap-2">
              {courses.map((course, idx) => (
                <span
                  key={idx}
                  className="bg-dark/10 dark:bg-light/10 text-dark dark:text-light text-xs font-medium px-2.5 py-1 rounded-full border border-dark/20 dark:border-light/20"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </li>
  );
};

export default function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 md:my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light md:text-6xl xs:text-4xl md:mb-16">
        Education & Curriculum
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* Animated Vertical Line */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Engineering Degree in Embedded Systems and IoT"
            time="2024 - 2027 (Expected Graduation)"
            place="Higher Institute of Computer Science and Multimedia of Gabes (ISIMG), University of Gabes"
            info="Rigorous multidisciplinary curriculum in hardware-firmware co-design, real-time operating systems, industrial fieldbuses, microarchitectures, dynamic system control, and embedded Linux."
            courses={[
              "VHDL Synthesis (18.25/20)",
              "Advanced Processor Architecture (17.0/20)",
              "Automotive Embedded Systems (16.0/20)",
              "SoC Architecture (16.3/20)",
              "Process Control & Dynamic Systems (15.95/20)",
              "Linux System Programming (15.2/20)",
              "LabVIEW Level 1 (16.13/20)",
              "Advanced Python (15.75/20)",
              "Embedded C STM32-CMSIS (14.63/20)",
              "Virtualization & Cloud (15.6/20)",
              "Software Testing & ISTQB (14.8/20)",
              "SolidWorks CAD Assembly",
              "End-of-Year PFA Project (16.75/20)",
            ]}
          />

          <Details
            type="Preparatory Classes (Mathematics, Physics & Computer Science)"
            time="2022 - 2024"
            place="Higher Institute of Computer Science and Multimedia of Gabes (ISIMG)"
            info="Intensive national preparatory cycle with rigorous training in advanced calculus, differential equations, linear algebra, classical mechanics, electromagnetism, and algorithmic foundations."
          />
        </ul>
      </div>
    </div>
  );
}
