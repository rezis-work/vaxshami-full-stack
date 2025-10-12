export type BlogType = {
  title: string;
  description?: string;
  coverimage: string;
  category: string;
  $createdAt: string;
};

export type BlogCardProps = {
  blog: DatabasePost;
  //blog: BlogType;
  hoverTextColor?: string;
  tagBg?: string;
  variant: "reverse" | "horizontal" | "vertical" | "blog";
  className?: string;
  titleClassName?: string;
  imageAspect?: string;
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

export type DatabasePost = {
  $id: string;
  $sequence: number;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $databaseId: string;
  $collectionId: string;
  userstable: string | null;
  coverimage: string;
  summary: string;
  content: string;
  createdDate: string;
  readtime: number;
  tags: string[];
  title: string;
  category: string;
  quote: string | null;
  section: string;
};
