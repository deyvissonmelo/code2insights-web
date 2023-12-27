import { getPostsResumeByType } from "@/services/prismic";
import { PostResume } from "@/models/post-resume";

export const revalidate = 3600;

export default async function Home() {
  const posts: PostResume[] = await getPostsResumeByType("statistics");

  return (
    <main className="flex h-[1000px] flex-col items-center justify-center">
      {posts.map((post) => (
        <div key={post.slug}>
          <span>{post.updateAt}</span>
          <h1>{post.title}</h1>
          <p>{post.resume}</p>
        </div>
      ))}
    </main>
  );
}
