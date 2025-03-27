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
  return (
    <div>
      <h1 className="text-6xl font-extrabold font-mono italic flex justify-center">
        Blogs
      </h1>
      <ArticlesCardsGrid posts={posts} />
    </div>
  );
};

export default BlogPage;
