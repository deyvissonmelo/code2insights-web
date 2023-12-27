import { getPostsResumeByType } from "@/services/prismic";
import { PostResume } from "@/models/post-resume";
import PostImageCard from "@/components/post-image-card";

export const revalidate = 3600;

export default async function Home() {
  const posts: PostResume[] = await getPostsResumeByType("statistics");

  return (
    <main className="flex h-[1000px] flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-[72rem]">
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
    </main>
  );
}
