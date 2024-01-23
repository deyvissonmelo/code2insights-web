import NextImage from "next/image";
import { PostResume } from "@/models/post-resume";
import { MessageSquareMore, ThumbsUp } from "lucide-react";
import Link from "next/link";

interface PostThumbProps {
  post: PostResume;
}

const PostThumb = ({ post }: PostThumbProps) => {
  return (
    <div>
      <div className="group relative my-8 h-48 w-full sm:h-48 md:h-48">
        <Link href={`/posts/${post.type}/${post.uid}`}>
          <NextImage
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
            src={post?.imageUrl ?? ""}
            alt={post?.imageAlt ?? ""}
            className="brightness-90 group-hover:brightness-75"
          />
        </Link>
      </div>
      <h2 className="mb-2 font-lato text-xl font-extrabold">
        <Link
          className="font-bold hover:underline hover:decoration-2"
          href={`/posts/${post.type}/${post.uid}`}
        >
          {post.title}
        </Link>
      </h2>
      <p className="mb-4 text-gray-500 overflow-hidden text-ellipsis line-clamp-5">{post.resume}</p>
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
