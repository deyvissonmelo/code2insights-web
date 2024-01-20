import {
  PostType,
  getPostTypes,
  getPostsResumeByType,
} from "@/services/prismic/prismic";
import { PostResume } from "@/models/post-resume";
import PostImageCard from "@/components/post-image-card";
import PostList from "@/components/pages/home/post-list";
import { PrismicPageResponse } from "@/services/prismic/prismic-page-response";
import Bio from "@/components/bio";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";
import CategoryList from "@/components/category-list";

export const revalidate = 3600;

export default async function Home() {
  const posts: PrismicPageResponse<PostResume> = await getPostsResumeByType(
    PostType.STATISTICS,
    1,
    5,
  );

  const categories = await getPostTypes();

  return (
    <main className="flex flex-col justify-start overflow-y-auto pt-app-nav-bar">
      <div
        id="content"
        className="mx-auto mb-16 flex w-full flex-col gap-10 sm:max-w-[36rem] md:max-w-[56rem] md:px-4 lg:max-w-[72rem]"
      >
        <div id="latestPosts" className="mt-10 w-full">
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

        <div className="flex w-full flex-col gap-6 lg:flex-row lg:gap-4">
          <PostList />
          <div className="flex flex-col gap-4">
            <Bio className="lg:max-w-[50rem]" />
            <Newsletter className="lg:max-w-[50rem]" />
            <CategoryList categories={categories} />
          </div>
        </div>
      </div>
    </main>
  );
}
