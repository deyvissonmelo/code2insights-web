import PostList from "@/components/post-list";
import { PostType } from "@/services/prismic/prismic";

export default async function Categories({
  params,
}: {
  params: { type: PostType };
}) {
  return (
    <main>
      <div className="px-4 py-app-nav-bar md:px-8">
        <div className="mx-auto max-w-[800px]">
          <h2 className="my-12 text-3xl font-black leading-8 font-lato">{`Posts about ${params.type}`}</h2>
          <div>
            <PostList postType={params.type} pageSize={10} />
          </div>
        </div>
      </div>
    </main>
  );
}
