// export type BlogCardProps = {
//   blog: {
//     id: number;
//     title: string;
//     description?: string;
//     image: string;
//     category: string;
//     created_at: string;
//     link: string;
//   };
//   hoverTextColor?: string;
//   tagBg?: string;
//   variant: "reverse" | "horizontal" | "vertical" | "blog";
//   className?: string;
//   titleClassName?: string;
//   imageAspect?: string;
// };
export type BlogCardProps = {
  blog: DatabasePost;
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
  $createdAt: string; // ISO date string
  $updatedAt: string; // ISO date string
  $permissions: string[];
  $databaseId: string;
  $collectionId: string;
  userstable: string | null;
  coverimage: string;
  summary: string;
  content: string;
  createdDate: string; // ISO date string
  readtime: number;
  tags: string[];
  title: string;
  category: string;
  quote: string | null;
  section: string;
};
