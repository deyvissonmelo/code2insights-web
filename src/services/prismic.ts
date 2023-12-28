import { PostResume } from "@/models/post-resume";
import * as Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { cache } from "react";

const repositoryName = "code2insights";

export enum PostType {
  STATISTICS = "statistics",
}

export const PrismicClient = Prismic.createClient(repositoryName, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});

export const getPostsResumeByType = cache(
  async (type: PostType, pageSize: number = 10) => {
    const response = await PrismicClient.getByType(type, {
      fetch: ["publication.title", "publication.content"],
      page: 1,
      pageSize: pageSize,
    });

    if (!response) return [];

    console.log(response);
    console.log(response.results[0].data);

    return response.results.map<PostResume>((post) => {
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
  },
);
