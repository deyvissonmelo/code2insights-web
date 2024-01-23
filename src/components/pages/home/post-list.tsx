"use client";

import Pagination from "@/components/pagination";
import PostCard from "@/components/post-card";
import { PostResume } from "@/models/post-resume";
import { getPostsResumeByType, PostType } from "@/services/prismic/prismic";
import { useEffect, useState } from "react";

const PAGE_SIZE = 10;

const PostList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPostList, setCurrentPostList] = useState<PostResume[]>([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async (pageNumber: number = 1) => {
    const response = await getPostsResumeByType(
      PostType.STATISTICS,
      pageNumber,
      PAGE_SIZE,
    );

    if (response) {
      setCurrentPage(pageNumber);
      setTotalPosts(response.total_results_size || 0);
      setCurrentPostList(response.results || []);
    }
  };

  const onChangePage = async (pageNumber: number) => {
    loadPosts(pageNumber);
  };

  return (
    <div
      id="postList"
      className="flex w-full flex-col items-start justify-start gap-5"
    >
      {currentPostList.map((post) => (
        <PostCard key={post.uid} post={post} />
      ))}

      <Pagination
        totalItems={totalPosts}
        currentPage={currentPage}
        pageSize={PAGE_SIZE}
        onPageChange={onChangePage}
      />
    </div>
  );
};

export default PostList;
