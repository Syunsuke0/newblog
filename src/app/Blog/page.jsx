import { client } from "../libs/microcms";
import ArticlesCardsGrid from "@/features/blog/ArticlesCardsGrid";

const getBlogPosts = async () => {
  const data = await client.get({
    endpoint: "blog", // 'blog'はmicroCMSのエンドポイント名
    queries: {
      fields: "id,title,publishedAt,image",
    },
  });
  return data.contents;
};

const Blog = async () => {
  const posts = await getBlogPosts();
  return (
    <div className="w-4xl mx-auto">
      <h1 className="text-center text-5xl pt-20 pb-10 font-extrabold">Blogs</h1>
      <ArticlesCardsGrid posts={posts} />
    </div>
  );
};

export default Blog;
