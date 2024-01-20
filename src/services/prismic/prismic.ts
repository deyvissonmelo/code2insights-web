import { PostResume } from "@/models/post-resume";
import * as Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { cache } from "react";
import { PostCategory } from "@/models/post-category";
import { Post } from "@/models/post";

const repositoryName = "code2insights";

export enum PostType {
  STATISTICS = "statistics",
}

export const PrismicClient = Prismic.createClient(repositoryName, {
  accessToken: process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN,
});

export const getPostByUid = cache(
  async (type: string, uid: string): Promise<Post | undefined> => {
    const response = await PrismicClient.getByUID(type, uid);

    if (!response) return undefined;

    return {
      uid: response.uid || "",
      type: type,
      title: RichText.asText(response.data.title),
      resume: RichText.asText(response.data.resume),
      content: RichText.asHtml(response.data.content),
      imageUrl: response.data.postimage.url,
      imageAlt: response.data.postimage.alt,
      updatedAt: new Date(response.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        },
      ),
    };
  },
);

export const getPostTypes = cache(async (): Promise<PostCategory[]> => {
  const response = (await PrismicClient.getRepository()).types;

  if (!response) return [];

  const categories: PostCategory[] = [];

  Object.keys(response).forEach((key) =>
    categories.push({
      code: key,
      name: response[key],
    }),
  );

  return categories;
});

export const getPostsResumeByType = cache(
  async (type: PostType, page: number = 1, pageSize: number = 10) => {
    const response = await PrismicClient.getByType(type, {
      fetch: ["publication.title", "publication.content"],
      page: page,
      pageSize: pageSize,
    });

    if (!response) return {};

    const results = response.results.map<PostResume>((post) => {
      return {
        slug: post.uid ?? "",
        type: type,
        title: RichText.asText(post.data.title),
        resume:
          post.data.content.find(
            (content: { type: string }) => content.type === "paragraph",
          )?.text ?? "",
        imageUrl: post.data.postimage.url,
        imageAlt: post.data.postimage.alt,
        updateAt: new Date(post.last_publication_date).toLocaleDateString(
          "pt-BR",
          {
            day: "2-digit",
            month: "long",
            year: "numeric",
          },
        ),
      };
    });

    return {
      page: response.page,
      results_size: response.results_size,
      total_pages: response.total_pages,
      total_results_size: response.total_results_size,
      results: results,
    };
  },
);
