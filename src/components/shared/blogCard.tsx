import Image from "next/image";

import Link from "next/link";

import { blogCardStyles } from "@/constants/blogCardStyles";
import { BlogCardProps } from "@/types/blogCardTypes";
import { cn, formatDate } from "@/lib/utils";

export default function BlogCard({
  blog,
  variant = "blog",
  className,
}: BlogCardProps) {
  const { created_at, title, image, category, description } = blog;

  const date = formatDate(created_at);
  const s = blogCardStyles[variant];
  const blogTitle = title.replaceAll(" ", "-");

  return (
    <div className={cn("gap-5 lg:gap-[30px]  flex", s.wrapper, className)}>
      <div className={`relative flex-shrink-0 ${s.imageWrapper}`}>
        <Image src={image} alt={title} fill className={s.image} />
      </div>

      <div className={s.textWrapper}>
        <div className="flex items-center gap-4 mb-3 ">
          <span className={s.categoryBg}>{category.toUpperCase()}</span>
          <span className="text-sm">{date}</span>
        </div>
        <Link
          href={`/blog/${encodeURIComponent(blogTitle)}`}
          className="block underlineHover"
        >
          {title}
        </Link>

        {/* <h3 className={s.title}>{title}</h3> */}

        {description && <p className={s.description}>{description}</p>}
      </div>
    </div>
  );
}
