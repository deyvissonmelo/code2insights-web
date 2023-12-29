import { PostType, getPostsResumeByType } from "@/services/prismic/prismic";
import { PostResume } from "@/models/post-resume";
import PostImageCard from "@/components/post-image-card";
import PostList from "@/components/pages/home/post-list";
import { PrismicPageResponse } from "@/services/prismic/prismic-page-response";

export const revalidate = 3600;

export default async function Home() {
  const posts: PrismicPageResponse<PostResume> = await getPostsResumeByType(
    PostType.STATISTICS,
    1,
    5,
  );

  return (
    <main className="flex h-svh flex-col justify-start overflow-y-auto py-app-nav-bar">
      <div
        id="content"
        className="mx-auto w-full sm:max-w-[36rem] md:max-w-[56rem] lg:max-w-[72rem]"
      >
        <div id="latestPosts" className="my-10 w-full">
          <div className="grid gap-x-0 gap-y-3 md:grid-cols-4 md:gap-x-6 lg:grid-cols-6">
            {posts.results?.map((post, index) => (
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

        <PostList />
      </div>
    </main>
  );
}
