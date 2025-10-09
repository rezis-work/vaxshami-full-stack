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
  imageAspect,
  tagBg,
  hoverTextColor,
}: BlogCardProps) {
  const { createdDate, title, coverimage, category, summary } = blog;

  const date = formatDate(createdDate);
  const s = blogCardStyles[variant];
  const blogTitle = title.replaceAll(" ", "-");

  return (
    <div className={cn("gap-5 lg:gap-[30px]  flex", s.wrapper, className)}>
      <Link
        href={`/blog/${encodeURIComponent(blogTitle)}`}
        className={`relative flex-shrink-0 ${s.imageWrapper} ${imageAspect}`}
      >
        <Image src={coverimage} alt={title} fill className={s.image} />
      </Link>

      <div className={s.textWrapper}>
        <div className="flex items-center gap-4 mb-3 ">
          {category !== "vacancy" && (
            <Link href="#" className={`${s.categoryBg} !${tagBg}`}>
              {category.toUpperCase()}
            </Link>
          )}
          <span className="text-sm">{date}</span>
        </div>
        <Link href={`/blog/${encodeURIComponent(blogTitle)}`} className="block">
          <HoverTitle
            text={title}
            titleClassname={cn(s.title, hoverTextColor, "cursor-pointer")}
          />
        </Link>

        {summary && <p className={s.description}>{summary}</p>}
      </div>
    </div>
  );
}
