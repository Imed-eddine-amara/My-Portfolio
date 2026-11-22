import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GithubIcon } from "./Icons";

const FramerImage = motion(Image);

export const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link = "https://github.com/Imed-eddine-amara",
  github = "https://github.com/Imed-eddine-amara",
  tags = [],
  priority = false,
}) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 my-8">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

      {/* Visual Cover */}
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full relative min-h-[260px] bg-dark/5 dark:bg-light/5 flex items-center justify-center border border-dark/10 dark:border-light/10"
      >
        {img ? (
          <FramerImage
            src={img}
            alt={title}
            width={800}
            height={480}
            className="w-full h-auto object-cover max-h-[360px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority={priority}
          />
        ) : (
          <div className="p-8 text-center flex flex-col items-center justify-center">
            <span className="text-primary dark:text-primaryDark text-5xl mb-3">
              ⚡
            </span>
            <span className="font-mono text-sm text-dark/70 dark:text-light/70 uppercase tracking-widest font-semibold">
              {type}
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="w-1/2 flex flex-col items-start justify-between pl-8 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-bold text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-3 font-medium text-dark/80 dark:text-light/80 text-base sm:text-sm leading-relaxed">
          {summary}
        </p>

        {/* Tech Badges */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 my-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-dark/10 dark:bg-light/10 text-dark dark:text-light text-xs font-semibold px-2.5 py-1 rounded border border-dark/20 dark:border-light/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center">
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 hover:opacity-80 transition-opacity"
            aria-label={`${title} GitHub repository`}
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 rounded-lg bg-dark text-light p-2.5 px-6 text-base font-semibold dark:bg-light dark:text-dark hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light transition-all sm:px-4 sm:text-sm"
          >
            View Architecture
          </Link>
        </div>
      </div>
    </article>
  );
};

export const Project = ({
  title,
  type,
  summary,
  img,
  link = "https://github.com/Imed-eddine-amara",
  github = "https://github.com/Imed-eddine-amara",
  tags = [],
}) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4 my-4 shadow-xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full cursor-pointer overflow-hidden rounded-lg relative min-h-[160px] bg-dark/5 dark:bg-light/5 flex items-center justify-center border border-dark/10 dark:border-light/10 mb-4"
      >
        {img ? (
          <FramerImage
            src={img}
            alt={title}
            width={800}
            height={480}
            className="w-full h-auto object-cover max-h-[220px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        ) : (
          <div className="p-6 text-center">
            <span className="text-primary dark:text-primaryDark text-4xl block mb-2">
              ⚙️
            </span>
            <span className="font-mono text-xs text-dark/70 dark:text-light/70 uppercase tracking-widest font-semibold">
              {type}
            </span>
          </div>
        )}
      </Link>

      <div className="w-full flex flex-col items-start justify-between">
        <span className="text-primary font-bold text-sm dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold dark:text-light sm:text-xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark/80 dark:text-light/80 text-sm leading-relaxed">
          {summary}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 my-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-dark/10 dark:bg-light/10 text-dark dark:text-light text-[11px] font-medium px-2 py-0.5 rounded border border-dark/15 dark:border-light/15"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="w-full mt-4 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold underline underline-offset-2 dark:text-light text-dark hover:text-primary dark:hover:text-primaryDark"
          >
            Explore System
          </Link>
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 hover:opacity-80 transition-opacity"
            aria-label={`${title} GitHub repository`}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
