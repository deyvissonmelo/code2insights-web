import NextImage from "next/image";
import { PostResume } from "@/models/post-resume";
import { MessageSquareMore, ThumbsUp } from "lucide-react";
import Link from "next/link";
import PostCounter from "./post-counter";

interface PostThumbProps {
  post: PostResume;
}

const PostThumb = ({ post }: PostThumbProps) => {
  return (
    <div>
      <div className="group relative my-4 h-48 w-full sm:h-48 md:h-48">
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
      <p className="mb-4 line-clamp-4 overflow-hidden text-ellipsis text-gray-500">
        {post.resume}
      </p>
      <PostCounter />
    </div>
  );
};

export default PostThumb;
