import NextImage from "next/image";
import { PostResume } from "@/models/post-resume";
import { MessageSquareMore, ThumbsUp } from "lucide-react";

interface PostThumbProps {
  post: PostResume;
}

const PostThumb = ({ post }: PostThumbProps) => {
  return (
    <div>
      <div className="relative my-8 h-48 w-full sm:h-96 md:h-48">
        <NextImage
          layout="fill"
          objectFit="cover"
          objectPosition="50% 50%"
          src={post?.imageUrl ?? ""}
          alt={post?.imageAlt ?? ""}
        />
      </div>
      <h2 className="mb-2 font-lato text-xl font-extrabold">{post.title}</h2>
      <p className="text-gray-500 mb-4">{post.resume}</p>
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
    </div>
  );
};

export default PostThumb;
