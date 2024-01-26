import {
  PostType,
  getPostByUid,
  getPostsResumeByType,
} from "@/services/prismic/prismic";

import PostCounter from "@/components/post/post-counter";
import PostSignature from "@/components/post/post-signature";
import RelatedPosts from "./related-posts";
import PostContent from "./post-content";
import PostFormResponse from "./post-form-response";
import PostResponse from "./post-response";

export default async function Post({
  params,
}: {
  params: { type: PostType; uid: string };
}) {
  const post = await getPostByUid(params.type, params.uid);

  const relatedPosts = await getPostsResumeByType(params.type, 1, 5);

  return (
    <>
      <main className="mb-32">
        <div className="bg-white px-4 py-app-nav-bar">
          {post && <PostContent post={post} />}

          <div className="mx-auto mt-8 w-full max-w-[800px] bg-white px-4 md:px-8">
            <hr className="my-8" />
            <PostCounter />
          </div>
          <PostFormResponse />
        </div>

        <PostSignature />

        <div className="mx-auto mb-8 mt-12 w-full max-w-[960px]">
          <RelatedPosts
            postUid={post?.uid || ""}
            relatedPosts={relatedPosts.results || []}
          />
        </div>

        <div className="mx-auto mb-8 mt-12 max-w-[960px] px-6">
          <h2 className="mb-8 text-lg font-bold">Reponses:</h2>          
          <div className="mx-auto max-w-[800px]">
            <PostResponse />
            <PostResponse />
            <PostResponse />
            <PostResponse />
          </div>
        </div>
      </main>
    </>
  );
}
