import { client } from "@/libs/microcms";
import ArticlesCardsGrid from "../components/ArtoclesCardsGrid/ArtoclesCardsGrid";

const getBlogPosts = async () => {
  const data = await client.get({
    endpoint: "blog", // 'blog'はmicroCMSのエンドポイント名
    // queries: {
    //   fields: "id,title", // idとtitleを取得
    //   limit: 5, // 最新の5件を取得
    // },
  });
  return data.contents;
};

const BlogPage = async () => {
  const posts = await getBlogPosts();
  return <ArticlesCardsGrid posts={posts} />;
};

export default BlogPage;
