import { Post } from "@/models/post";
import NextImage from "next/image";
import { twMerge } from "tailwind-merge";

interface PostContentProps {
  post: Post;
}

const PostContent = ({ post }: PostContentProps) => {
  return (
    <article className="mx-auto mt-8 w-full max-w-[800px] bg-white px-4 md:px-8">
      <div className="flex w-full flex-col pt-5 text-gray-500">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between">
          <time>{post?.updatedAt}</time>
          <span className="mb-4 capitalize">{post?.type}</span>
        </div>
        <hr />
      </div>

      <div className="pt-8">
        <h1 className="mb-4 font-lato text-3xl font-black leading-10 text-black">
          {post?.title}
        </h1>
        <p className="text-lg leading-7 text-gray-500">{post?.resume}</p>
      </div>

      <div className="relative my-8 h-48 w-full sm:h-96">
        <NextImage
          className="aspect-video"
          layout="fill"
          objectFit="cover"
          src={post?.imageUrl ?? ""}
          alt={post?.imageAlt ?? ""}
        />
      </div>

      <div
        className={twMerge(
          "[&>h1]:mb-4 [&>h1]:text-2xl [&>h1]:font-extrabold",
          "[&>p]:mb-8 [&>p]:text-xl [&>p]:leading-8 [&>p]:text-gray-600",
          "[&>h2]:mb-4 [&>h2]:text-xl [&>h2]:font-bold",
          "[&>h3]:mb-4 [&>h3]:text-lg [&>h3]:font-bold",
          "[&>*>strong]:text-black",
          "[&>ul]:mb-8 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-3",
          "[&>ol]:mb-8 [&>ol]:flex [&>ol]:flex-col [&>ol]:gap-3",
          "[&>ul>*]:text-lg",
          "[&>*>iframe]:aspect-video [&>*>iframe]:h-96 [&>*>iframe]:w-full",
        )}
        dangerouslySetInnerHTML={{ __html: post?.content || "" }}
      />
    </article>
  );
};

export default PostContent;
