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
  hoverTextColor,
}: BlogCardProps) {
  const { created_at, title, image, category, description, link } = blog;

  const date = formatDate(created_at);
  const s = blogCardStyles[variant];
  const blogTitle = title.replaceAll(" ", "-");

  return (
    <div className={cn("gap-5 lg:gap-[30px]  flex", s.wrapper, className)}>
      <Link href={link} className={`relative flex-shrink-0 ${s.imageWrapper}`}>
        <Image src={image} alt={title} fill className={s.image} />
      </Link>

      <div className={s.textWrapper}>
        <div className="flex items-center gap-4 mb-3 ">
          <Link href="#" className={`${s.categoryBg} !${tagBg}`}>
            {category.toUpperCase()}
          </Link>
          <span className="text-sm">{date}</span>
        </div>
        <Link href={`/blog/${encodeURIComponent(blogTitle)}`} className="block">
          <HoverTitle
            text={title}
            titleClassname={cn(s.title, hoverTextColor, "cursor-pointer")}
          />
        </Link>

        {description && <p className={s.description}>{description}</p>}
      </div>
    </div>
  );
}
