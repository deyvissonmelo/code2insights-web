import NextImage from "next/image";
import { getPostByUid } from "@/services/prismic/prismic";

export default async function Post({
  params,
}: {
  params: { type: string; uid: string };
}) {
  const post = await getPostByUid(params.type, params.uid);

  return (
    <>
      <main className="px-4 py-app-nav-bar bg-white">
        <article className="mt-8 max-w-[680px] mx-auto w-full bg-white px-4 md:px-8">
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
            <p className="text-base leading-7 text-gray-500">{post?.resume}</p>
          </div>

          <div className="relative my-8 h-52 w-full sm:h-96">
            <NextImage
              layout="fill"
              objectFit="cover"
              src={post?.imageUrl ?? ""}
              alt={post?.imageAlt ?? ""}
            />
          </div>

          <div dangerouslySetInnerHTML={{ __html: post?.content || "" }} />
        </article>
      </main>
    </>
  );
}
