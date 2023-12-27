import { PostResume } from "@/models/post-resume";
import * as Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { cache } from "react";

const repositoryName = "code2insights";

export const PrismicClient = Prismic.createClient(repositoryName, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});

export const getPostsResumeByType = cache(
  async (type: string, pageSize: number = 10) => {
    const response = await PrismicClient.getByType(type, {
      fetch: ["publication.title", "publication.content"],
      page: 1,
      pageSize: pageSize,
    });

    if (!response) return [];

    console.log(response);

    return response.results.map<PostResume>((post) => {
      return {
        slug: post.uid ?? "",
        title: RichText.asText(post.data.title),
        resume:
          post.data.content.find(
            (content: { type: string }) => content.type === "paragraph",
          )?.text ?? "",
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
