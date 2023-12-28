import { PostType, getPostsResumeByType } from "@/services/prismic";
import { PostResume } from "@/models/post-resume";
import PostImageCard from "@/components/post-image-card";
import Link from "next/link";
import { MessageSquareMore, ThumbsUp } from "lucide-react";
import Button from "@/components/button";
import PostCard from "@/components/post-card";

export const revalidate = 3600;

export default async function Home() {
  const posts: PostResume[] = await getPostsResumeByType(
    PostType.STATISTICS,
    5,
  );

  return (
    <main className="py-app-nav-bar flex h-svh flex-col justify-start overflow-y-auto">
      <div
        id="content"
        className="mx-auto w-full sm:max-w-[36rem] md:max-w-[56rem] lg:max-w-[72rem]"
      >
        <div id="latestPosts" className="my-10 w-full">
          <div className="grid gap-x-0 gap-y-3 md:grid-cols-4 md:gap-x-6 lg:grid-cols-6">
            {posts.map((post, index) => (
              <div
                key={post.slug}
                className={`md:col-span-2 md:px-0 ${
                  index <= 1 ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                <PostImageCard post={post} />
              </div>
            ))}
          </div>
        </div>

        <div
          id="postList"
          className="flex w-full flex-col items-start justify-start gap-5"
        >
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
