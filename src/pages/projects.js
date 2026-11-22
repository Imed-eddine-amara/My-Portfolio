import React, { useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { FeaturedProject, Project } from "@/components/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "ColdGuard: Connected Cold-Chain IoT Platform",
    category: "Firmware & RTOS",
    secondaryCategory: "Edge AI & IoT",
    type: "Featured Platform System",
    isFeatured: true,
    summary:
      "Industrial cold-chain monitoring system featuring dual-core ESP32 firmware in C/ESP-IDF with FreeRTOS multi-core scheduling, zero-touch AWS IoT Fleet Provisioning with X.509 certificates, mutual-TLS (mTLS) authentication, dual-bank A/B FOTA updates with automatic rollback, and an MCP conversational query backend.",
    img: "/images/projects/crypto-screener-cover-image.jpg",
    tags: ["ESP32", "FreeRTOS", "AWS IoT Core", "mTLS", "A/B FOTA", "FastAPI"],
    link: "https://github.com/Imed-eddine-amara",
    github: "https://github.com/Imed-eddine-amara",
  },
  {
    id: 2,
    title: "Autonomous 4-Layer LoRa Node & Industrial Power Architecture",
    category: "Hardware & PCB",
    type: "Featured Hardware System",
    isFeatured: true,
    summary:
      "4-layer impedance-controlled PCB designed in Altium Designer for RoboCare featuring an STM32WLE5 SoC, ±70V fault-protected THVD2419 RS-485 transceiver, 64 Mbit SPI NOR Flash data logging, and TI BQ24074 solar/battery power management with Dynamic Power-Path Management (DPPM), reducing regulator quiescent current by 99% down to 450 nA.",
    img: "/images/projects/portfolio-cover-image.jpg",
    tags: ["Altium Designer", "STM32WLE5", "4-Layer PCB", "RS-485", "Solar DPPM", "LoRaWAN"],
    link: "https://github.com/Imed-eddine-amara",
    github: "https://github.com/Imed-eddine-amara",
  },
  {
    id: 3,
    title: "Dynamic Simulation of a 2D Drone in MATLAB/Simulink",
    category: "Robotics & Simulation",
    type: "Featured Control System",
    isFeatured: true,
    summary:
      "Mathematical modeling of non-linear equations of motion for a 2D quadrotor drone covering altitude Z, position Y, and pitch attitude phi; design and tuning of cascade PID control loops for altitude regulation, lateral position tracking, and inner-loop stabilization in MATLAB and Simulink.",
    img: "/images/projects/devdreaming.jpg",
    tags: ["MATLAB", "Simulink", "Cascade PID", "Quadrotor Dynamics", "Control Systems"],
    link: "https://github.com/Imed-eddine-amara",
    github: "https://github.com/Imed-eddine-amara",
  },
  {
    id: 4,
    title: "Buildroot-Based Minimal Embedded Linux System",
    category: "Linux & Low-Level",
    type: "Featured Embedded Linux System",
    isFeatured: true,
    summary:
      "Bootable AArch64 embedded Linux distribution built from scratch with Buildroot on QEMU virt machine, featuring BusyBox root filesystem overlays, Dropbear SSH, and a custom C system-monitoring daemon reading /proc/stat and /proc/meminfo with SysV init autostart.",
    img: "/images/projects/nft-collection-website-cover-image.jpg",
    tags: ["Embedded Linux", "Buildroot", "AArch64", "QEMU", "C", "procfs", "SysV init"],
    link: "https://github.com/Imed-eddine-amara",
    github: "https://github.com/Imed-eddine-amara",
  },
  {
    id: 5,
    title: "Robotic Arm Mechanical Assembly & Kinematics (SolidWorks)",
    category: "Robotics & Simulation",
    type: "CAD & Kinematics",
    isFeatured: false,
    summary:
      "3D CAD modeling and mechanical assembly of an articulated robotic arm in SolidWorks; defined geometric mates, cylindrical pin linkages, and clevis joints, verifying mechanical clearances and kinematic range-of-motion alignment.",
    img: "/images/projects/fashion-studio-website.jpg",
    tags: ["SolidWorks", "3D CAD", "Mechanical Assembly", "Kinematics", "Robotics"],
    link: "https://github.com/Imed-eddine-amara",
    github: "https://github.com/Imed-eddine-amara",
  },
  {
    id: 6,
    title: "Zephyr RTOS Multithreaded Application on STM32F303RE",
    category: "Firmware & RTOS",
    type: "RTOS Application",
    isFeatured: false,
    summary:
      "Multithreaded embedded application utilizing periodic threads, GPIO interrupts, message queues, DeviceTree hardware description, and Kconfig customization for peripheral control and I2C LCD interfacing.",
    img: "/images/projects/agency-website-cover-image.jpg",
    tags: ["Zephyr RTOS", "STM32F303", "DeviceTree", "Kconfig", "I2C LCD", "Interrupts"],
    link: "https://github.com/Imed-eddine-amara",
    github: "https://github.com/Imed-eddine-amara",
  },
  {
    id: 7,
    title: "FreeRTOS Queue-Based Task Synchronization on STM32F407",
    category: "Firmware & RTOS",
    type: "Real-Time IPC",
    isFeatured: false,
    summary:
      "Deterministic task scheduling, inter-task communication via safe queues, mutex locks, and resource synchronization for concurrent real-time tasks on STM32F407VGTX.",
    tags: ["FreeRTOS", "STM32F407", "IPC Queues", "Task Synchronization", "CMSIS"],
    link: "https://github.com/Imed-eddine-amara",
    github: "https://github.com/Imed-eddine-amara",
  },
  {
    id: 8,
    title: "Smart Parking & Sensing IoT System",
    category: "Edge AI & IoT",
    type: "Distributed IoT System",
    isFeatured: false,
    summary:
      "Led a 5-student engineering team developing a distributed smart parking prototype integrating ultrasonic vehicle sensing (HC-SR04), Heltec ESP32 LoRa wireless nodes, Raspberry Pi 4 gateway, and Firebase Realtime Database.",
    tags: ["ESP32", "LoRa", "Raspberry Pi 4", "Firebase", "Ultrasonic Sensing"],
    link: "https://github.com/Imed-eddine-amara",
    github: "https://github.com/Imed-eddine-amara",
  },
  {
    id: 9,
    title: "Vision-Based Access Control on Raspberry Pi & ESP32-CAM",
    category: "Edge AI & IoT",
    type: "Edge Computer Vision",
    isFeatured: false,
    summary:
      "Edge facial detection and recognition using OpenCV in Python (>95% accuracy, ~0.8s latency) interfaced with 12V electromagnetic strike lock actuator circuitry, 3.3V relay, and fail-secure safety logic.",
    tags: ["OpenCV", "Python", "ESP32-CAM", "Raspberry Pi 4", "Relay Actuation"],
    link: "https://github.com/Imed-eddine-amara",
    github: "https://github.com/Imed-eddine-amara",
  },
  {
    id: 10,
    title: "ESP32 RoboDash & IoT Connected Vehicle",
    category: "Robotics & Simulation",
    type: "Robotics & Telemetry",
    isFeatured: false,
    summary:
      "Autonomous obstacle-avoiding mobile robot prototype with ESP32 soft-AP, HTTP-to-WebSocket communication, motor control, and connected telemetry dashboard with Flutter.",
    tags: ["ESP32", "Motor Control", "Ultrasonic Sensing", "WebSockets", "Flutter"],
    link: "https://github.com/Imed-eddine-amara",
    github: "https://github.com/Imed-eddine-amara",
  },
  {
    id: 11,
    title: "Bare-Metal Register-Level CMSIS Peripheral Driver",
    category: "Linux & Low-Level",
    type: "Bare-Metal Firmware",
    isFeatured: false,
    summary:
      "Bare-metal peripheral driver directly manipulating RCC clock and GPIO registers on STM32 microcontrollers using memory-mapped I/O and CMSIS headers.",
    tags: ["Bare-Metal", "STM32", "CMSIS", "Memory-Mapped I/O", "Bit Masking"],
    link: "https://github.com/Imed-eddine-amara",
    github: "https://github.com/Imed-eddine-amara",
  },
];

const categories = [
  "All",
  "Firmware & RTOS",
  "Hardware & PCB",
  "Robotics & Simulation",
  "Linux & Low-Level",
  "Edge AI & IoT",
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter(
          (p) =>
            p.category === activeTab || p.secondaryCategory === activeTab
        );

  return (
    <>
      <Head>
        <title>Engineering Projects Showroom | Imed Eddine Amara</title>
        <meta
          name="description"
          content="Engineering project showroom of Imed Eddine Amara — embedded firmware, 4-layer PCB design, MATLAB/Simulink drone control, embedded Linux and edge systems."
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Engineering Showroom & Systems Gallery"
            className="mb-12 lg:!text-7xl sm:!text-6xl xs:!text-4xl"
          />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 border border-solid ${
                  activeTab === cat
                    ? "bg-dark text-light border-dark dark:bg-light dark:text-dark dark:border-light shadow-md"
                    : "bg-transparent text-dark/75 border-dark/30 hover:border-dark dark:text-light/75 dark:border-light/30 dark:hover:border-light"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {filteredProjects.map((project) =>
              project.isFeatured ? (
                <div key={project.id} className="col-span-12">
                  <FeaturedProject
                    type={project.type}
                    title={project.title}
                    summary={project.summary}
                    img={project.img}
                    tags={project.tags}
                    link={project.link}
                    github={project.github}
                  />
                </div>
              ) : (
                <div key={project.id} className="col-span-6 md:col-span-12">
                  <Project
                    type={project.type}
                    title={project.title}
                    summary={project.summary}
                    img={project.img}
                    tags={project.tags}
                    link={project.link}
                    github={project.github}
                  />
                </div>
              )
            )}
          </div>
        </Layout>
      </main>
    </>
  );
}
