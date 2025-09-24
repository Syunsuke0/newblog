"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const NAV = [
    { name: "Top", path: "/" },
    { name: "Blog", path: "/Blog" },
    { name: "About", path: "/About" },
  ];

  return (
    <div className="text-xl flex justify-between text-slate-700 py-4 px-24 ">
      <div className="text-cyan-600">Blog</div>
      <div className="space-x-10">
        {NAV.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`hover:bg-gray-200 p-2 rounded-full ${
                isActive ? "bg-sky-100 text-cyan-700 " : ""
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
