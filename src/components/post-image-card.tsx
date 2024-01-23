import { PostResume } from "@/models/post-resume";
import NextImage from "next/image";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface PostImageCardProps extends ButtonHTMLAttributes<HTMLDivElement> {
  post: PostResume;
}

const PostImageCard = ({ post, ...props }: PostImageCardProps) => {
  return (
    <div
      className="group flex h-72 w-full items-center justify-center border bg-white px-3 hover:cursor-pointer md:h-80"
      {...props}
    >
      <div className="relative h-[90%] w-[100%] overflow-hidden">
        <Link href={`/posts/${post.type}/${post.uid}`}>
          <div className="absolute left-2 top-2 z-10 text-gray-50">
            <h3 className="font-lt mb-2 text-2xl font-black">{post.title}</h3>
            <span className="rounded-xl border px-2 capitalize">
              {post.type}
            </span>
          </div>
          <NextImage
            layout="fill"
            objectFit="cover"
            src={post.imageUrl ?? ""}
            alt={post.imageAlt ?? ""}
            className="brightness-90 group-hover:brightness-75"
          />
          <div className="absolute bottom-2 left-2 z-10 text-gray-50">
            <span>{post.updateAt}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PostImageCard;
