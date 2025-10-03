import Image from "next/image";

import Link from "next/link";

import { blogCardStyles } from "@/constants/blogCardStyles";
import { BlogCardProps } from "@/types/blogCardTypes";
import { cn, formatDate } from "@/lib/utils";
import HoverTitle from "./hoverTitle";

export default function BlogCard({
  blog,
  variant,
  className,
  tagBg,
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
          <span className={`${s.categoryBg} ${tagBg}`}>
            {category.toUpperCase()}
          </span>
          <span className="text-sm">{date}</span>
        </div>
        <Link href={`/blog/${encodeURIComponent(blogTitle)}`} className="block">
          <HoverTitle
            text={title}
            titleClassname={cn(s.title, "hover:text-[#6d62ff] cursor-pointer")}
          />
        </Link>

        {description && <p className={s.description}>{description}</p>}
      </div>
    </div>
  );
}
