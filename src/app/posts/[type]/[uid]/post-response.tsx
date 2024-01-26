"use client";

import * as Avatar from "@radix-ui/react-avatar";
import { ThumbsUp } from "lucide-react";

const PostResponse = () => {
  return (
    <div className="mb-3 flex w-full gap-4 bg-white px-4 py-6 shadow-sm">
      <div className="relative h-48 w-full flex-1 sm:h-48 md:h-48">
        <Avatar.Root
          id="bioAvatar"
          className="mb-2 flex h-16 w-16 items-center justify-center overflow-hidden rounded-[100%] bg-orange-200"
        >
          <Avatar.Image
            className="h-full w-full border-r-inherit object-cover"
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt=""
          />
          <Avatar.Fallback className="text-2xl text-white">DM</Avatar.Fallback>
        </Avatar.Root>
      </div>
      <div className="w-full">
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:justify-between">
          <h3 className="font-bold sm:mb-0">José Albuqerque</h3>
          <time className="text-gray-400">July 18, 2022 at 10:36 AM</time>
        </div>
        <p className="mb-4 text-gray-500">
          Music is one of the driving forces in my life. I pray you will not let
          this be the last concert you attend. Dolly Parton, Kenny Rogers,
          Alabama, Three Dog Night, the first Bryan Adams: Cut like A Knife. And
          many more. Those I have seen. Nothing else like it. So proud u share
          music w your kids.
        </p>
        <div className="group flex justify-start gap-2 text-gray-400 cursor-pointer">
          <ThumbsUp className="group-hover:text-orange-400" />
          <span className="group-hover:text-orange-400">1024</span>
        </div>
      </div>
    </div>
  );
};

export default PostResponse;
