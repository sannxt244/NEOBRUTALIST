import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Blog 1 description",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Blog 2 description",
    },
    {
      id: 3,
      title: "Blog 3",
      description: "Blog 3 description",
    },
  ];

  return (
    <div className="flex-1 p-4 gap-4 flex flex-col">
      {blogs.map((blog) => (
        <Link href={`/blogs/${blog.id}`} key={blog.id}>
          <Card>{blog.title}</Card>
        </Link>
      ))}
    </div>
  );
}
