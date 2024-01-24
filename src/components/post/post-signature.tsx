"use client";

import * as Avatar from "@radix-ui/react-avatar";
import { GithubIcon, LucideLinkedin } from "lucide-react";
import Link from "next/link";

const PostSignature = () => {
  return (
    <div className="my-8 mx-auto flex w-full flex-row gap-4 bg-white px-6 py-4 sm:max-w-[800px]">
      <div>
        <Avatar.Root
          id="bioAvatar"
          className="mb-2 flex h-24 w-24 items-center justify-center overflow-hidden rounded-[100%] bg-orange-200"
        >
          <Avatar.Image
            className="h-full w-full border-r-inherit object-cover"
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt=""
          />
          <Avatar.Fallback className="text-2xl text-white">DM</Avatar.Fallback>
        </Avatar.Root>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col w-full sm:flex-row justify-between">
          <h3 className="font-bold mb-2 sm:mb-0">Deyvisson Melo</h3>
          <div
            id="bioSocialLinks"
            className="mb-4 flex items-start justify-start gap-2 text-gray-400 sm:mb-2"
          >
            <Link href="/" className="hover:text-orange-500">
              <GithubIcon />
            </Link>
            <Link href="/" className="hover:text-orange-500">
              <LucideLinkedin />
            </Link>
          </div>
        </div>
        <p className="text-gray-400 font-lato text-lg">
          Compassionate entrepreneur on a mission to end homelessness. #jshomes
          Javascript, tech education, electronic music, photography, film, viral
          apps.{" "}
        </p>
      </div>
    </div>
  );
};

export default PostSignature;
