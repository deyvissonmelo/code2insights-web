import PostThumb from "@/components/post/post-thumb";
import { PostResume } from "@/models/post-resume";

interface RelatedPostsProps {
  postUid: string;
  relatedPosts: PostResume[];
}

const RelatedPosts = ({ postUid, relatedPosts }: RelatedPostsProps) => {
  return (
    <div className="mx-auto mb-8 mt-12 w-full max-w-[800px] px-3 sm:px-6">
      <h2 className="mb-4 text-lg font-bold">Related posts:</h2>

      <div className="grid w-full gap-x-0 gap-y-3 sm:grid-cols-2 sm:gap-x-3 md:gap-x-6">
        {relatedPosts
          .filter((p) => p.uid !== postUid)
          .slice(0, 4)
          .map((p) => (
            <PostThumb key={p.uid} post={p} />
          ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
