import { MessageSquareMore, ThumbsUp } from "lucide-react";

const PostCounter = () => {
  return (
    <div className="mb-3 flex gap-5 text-gray-400 lg:mb-0">
      <div className="flex justify-between gap-2">
        <MessageSquareMore />
        <span className="">10 responses</span>
      </div>

      <div className="flex justify-between gap-2">
        <ThumbsUp />
        <span className="">1024</span>
      </div>
    </div>
  );
};

export default PostCounter;
