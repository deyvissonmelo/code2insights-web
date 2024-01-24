import {
  PostType,
  getPostByUid,
  getPostsResumeByType,
} from "@/services/prismic/prismic";

import Button from "@/components/button";
import PostCounter from "@/components/post/post-counter";
import PostSignature from "@/components/post/post-signature";
import RelatedPosts from "./related-posts";
import PostContent from "./post-content";
import Input from "@/components/input";
import { MessageSquareMore, Send, X } from "lucide-react";
import TextArea from "@/components/textarea";
import PostFormResponse from "./post-form-response";

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
            <div>
              <PostCounter />
            </div>
          </div>
          <PostFormResponse />
        </div>

        <PostSignature />

        <RelatedPosts
          postUid={post?.uid || ""}
          relatedPosts={relatedPosts.results || []}
        />
      </main>
    </>
  );
}
