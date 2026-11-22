import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Imed Eddine Amara | Embedded Systems & Hardware Engineer</title>
        <meta
          name="description"
          content="Personal Engineering Portfolio of Imed Eddine Amara — MCU firmware, RTOS, 4-layer PCB design, embedded Linux, robotics & dynamic control simulations."
        />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark text-dark dark:text-light w-full min-h-screen flex flex-col justify-between`}
      >
        <NavBar />
        <div className="flex-grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </>
  );
}
