import Link from "next/link";
import { client } from "../libs/microcms";

const getBlogPosts = async () => {
  const data = await client.get({
    endpoint: "blog", // 'blog'はmicroCMSのエンドポイント名
    queries: {
      fields: "id,title", // idとtitleを取得
    },
  });
  return data.contents;
};

const Blog = async () => {
  const posts = await getBlogPosts();
  return (
    <div className="w-4xl mx-auto">
      <h1 className="text-center text-5xl pt-20 pb-10 font-extrabold">Blogs</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/Blog/${post.id}`}>
              {" "}
              {/* 記事へのリンクを生成 */}
              {post.title} {/* タイトルを表示 */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
