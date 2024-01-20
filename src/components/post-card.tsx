"use client";

import { MessageSquareMore, ThumbsUp } from "lucide-react";
import Button from "./button";
import { PostResume } from "@/models/post-resume";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PostCardProps {
  post: PostResume;
}

const PostCard = ({ post }: PostCardProps) => {
  const router = useRouter();

  return (
    <div key={post.slug} className="w-full bg-white px-8 py-8">
      <div
        id="post-header"
        className="mb-7 flex justify-between border-b border-gray-300 pb-4 text-sm text-gray-500"
      >
        <span>{post.updateAt}</span>
        <span>{post.type}</span>
      </div>
      <div id="post-content" className="relative mb-4">
        <h2 className="font-lt mb-2 text-3xl leading-10">
          <Link
            className="font-bold hover:underline hover:decoration-4"
            href={`/posts/${post.type}/${post.slug}`}
          >
            {post.title}
          </Link>
        </h2>
        <p className="text-base leading-7 text-gray-500">{post.resume}</p>
      </div>
      <div
        id="post-footer"
        className="flex w-full flex-col items-start justify-between gap-5 lg:flex-row lg:items-center"
      >
        <div
          id="post-footer-info"
          className="mb-3 flex gap-5 text-gray-400 lg:mb-0"
        >
          <div className="flex justify-between gap-2">
            <MessageSquareMore />
            <span className="">10 responses</span>
          </div>

          <div className="flex justify-between gap-2">
            <ThumbsUp />
            <span className="">1024</span>
          </div>
        </div>

        <Button
          variant="outline"
          className="h-12 w-full lg:w-[30%]"
          onClick={() => router.push(`/posts/${post.type}/${post.slug}`)}
        >
          <span>Read more</span>
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
