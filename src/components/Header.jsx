import Link from "next/link";

export const Header = () => {
  const NAV = [
    { name: "Top", path: "/" },
    { name: "Blog", path: "/Blog" },
    { name: "Profile", path: "/Profile" },
  ];
  return (
    <div className="text-xl flex justify-between text-slate-700 py-4 px-24 ">
      <div className="text-cyan-600">Blog</div>
      <div className="space-x-10">
        {NAV.map((item) => {
          return (
            <Link
              key={item.name}
              href={item.path}
              className="hover:bg-gray-200 p-2 rounded-full"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
