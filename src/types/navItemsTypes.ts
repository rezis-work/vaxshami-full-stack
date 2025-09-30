export type NavItemsType = {
  id: string;
  title: string;
  href?: string;
  children?: NavItemsType[];
};
