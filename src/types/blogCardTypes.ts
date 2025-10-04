export type BlogCardProps = {
  blog: {
    id: number;
    title: string;
    description?: string;
    image: string;
    category: string;
    created_at: string;
    link: string;
  };
  hoverTextColor?: string;
  tagBg?: string;
  variant: "reverse" | "horizontal" | "vertical" | "blog";
  className?: string;
};

export type BlogCardVariantStyles = {
  wrapper: string;
  imageWrapper: string;
  image: string;
  textWrapper: string;
  categoryBg: string;
  title: string;
  description: string;
};
