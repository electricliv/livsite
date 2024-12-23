import { Book, Code, Link, Video } from "@carbon/icons-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen py-10">
      <main className="flex flex-col justify-evenly h-full">
        <div className="flex flex-col gap-8 items-center justify-center">
        <Image
          className="rounded-full"
          src="/liv_profile_pic.png"
          alt="me!"
          width={180}
          height={38}
          priority
        />
        <div className="text-5xl">
            Hi! I&apos;m Liv.
        </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <h3>NYC</h3>
          <h3>Engineer @ Lumos</h3>
        </div>
      </main>
      <footer className="row-start-3 flex gap-2 flex-wrap items-center justify-center sm:flex-row sm:gap-6 flex-col">
        <a href="https://www.linkedin.com/in/olivia-schirm/"
          target="_blank"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#b0b0b0] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          rel="noopener noreferrer">
            <Link />
            LinkedIn
        </a>
        <a href="https://github.com/electricliv"
          target="_blank"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#b0b0b0] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          rel="noopener noreferrer">
            <Code />
            Github
        </a>
        <a href="https://letterboxd.com/livso/"
          target="_blank"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#b0b0b0] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          rel="noopener noreferrer">
            <Video />
            Letterboxd
        </a>
        <a href="https://www.goodreads.com/user/show/52294778-olivia"
          target="_blank"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#b0b0b0] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          rel="noopener noreferrer">
            <Book />
            Goodreads
        </a>
      </footer>
    </div>
  );
}
