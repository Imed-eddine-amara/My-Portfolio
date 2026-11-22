import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Imed Eddine Amara | Embedded Systems & Hardware Engineer</title>
        <meta
          name="description"
          content="Engineering portfolio of Imed Eddine Amara — MCU firmware, RTOS, 4-layer PCB design, embedded Linux, robotics & control simulations."
        />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            {/* Hero Left: Text & CTAs */}
            <div className="w-1/2 flex flex-col items-start self-center lg:w-full lg:text-center order-1 lg:order-2">
              <AnimatedText
                text="Transforming Ideas Into Robust Embedded Hardware, Firmware & Autonomous Systems."
                className="!text-5xl !text-left xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-2xl font-extrabold leading-tight"
              />
              <p className="my-4 text-base font-medium text-dark/80 dark:text-light/80 md:text-sm sm:text-xs leading-relaxed">
                Final-year Embedded Systems & IoT Engineering student at ISIMG
                (University of Gabes, graduating 2027) specializing in MCU
                firmware (STM32, ESP32), RTOS (FreeRTOS, Zephyr), industrial
                4-layer PCB design (Altium Designer), embedded Linux (Buildroot,
                AArch64), and robotics & dynamic control simulations
                (MATLAB/Simulink). Explore my complete engineering showroom
                featuring industrial internships, hardware designs, and real-time
                embedded systems.
              </p>
              <div className="flex items-center self-start mt-4 lg:self-center">
                <Link
                  href="/cv.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base transition-all"
                  download={true}
                >
                  Download CV <LinkArrow className="w-5 ml-2" />
                </Link>
                <Link
                  href="mailto:Imededdine.amara@gmail.com"
                  className="ml-4 text-lg font-semibold capitalize text-dark underline dark:text-light md:text-base hover:text-primary dark:hover:text-primaryDark transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Hero Right: Profile Image */}
            <div className="w-1/2 flex justify-center items-center lg:w-full order-2 lg:order-1 lg:mb-8">
              <div className="relative w-[85%] max-w-[480px] aspect-square rounded-3xl overflow-hidden border-2 border-solid border-dark shadow-2xl dark:border-light bg-light dark:bg-dark p-2">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/profile/landing_page_photo.jpeg"
                    alt="Imed Eddine Amara"
                    fill
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                  />
                </div>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        {/* Decorative Lightbulb SVG in bottom right */}
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src="/images/svgs/miscellaneous_icons_1.svg"
            alt="Bulb Icon"
            width={96}
            height={96}
            className="w-full h-auto opacity-70 dark:invert"
          />
        </div>
      </main>
    </>
  );
}
