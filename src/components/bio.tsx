"use client";

import * as Avatar from "@radix-ui/react-avatar";
import {
  BookOpenText,
  Github,
  GithubIcon,
  Linkedin,
  LinkedinIcon,
  LucideLinkedin,
} from "lucide-react";
import Link from "next/link";

const Bio = () => {
  return (
    <div
      id="bioContainer"
      className="flex max-h-96 w-full flex-col items-center justify-center bg-white px-1 py-8 lg:max-w-80"
    >
      <Avatar.Root
        id="bioAvatar"
        className="mb-2 flex h-32 w-32 items-center justify-center overflow-hidden rounded-[100%] bg-orange-200"
      >
        <Avatar.Image
          className="h-full w-full border-r-inherit object-cover"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt=""
        />
        <Avatar.Fallback className="text-2xl text-white">DM</Avatar.Fallback>
      </Avatar.Root>
      <h2 id="bioName" className="font-lato text-lg text-gray-500">
        Deyvisson Melo
      </h2>
      <span id="bioProfession" className="mb-4 font-lato text-lg text-gray-400">
        Software Engineer
      </span>
      <div
        id="bioSocialLinks"
        className="mb-6 flex w-full items-center justify-center gap-3 text-gray-400"
      >
        <Link href="/" className="hover:text-orange-500">
          <GithubIcon />
        </Link>
        <Link href="/" className="hover:text-orange-500">
          <LucideLinkedin />
        </Link>
      </div>

      <hr className="mb-6 w-full" />

      <div id="bioCv" className="py-3">
        <Link
          href="/"
          className="flex items-center justify-start gap-2 text-gray-400 hover:text-orange-500"
        >
          <BookOpenText />
          <span>Download my CV</span>
        </Link>
      </div>
    </div>
  );
};

export default Bio;
