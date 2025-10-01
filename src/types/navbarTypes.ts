export type NavItemsType = {
  id: string;
  title: string;
  href?: string;
  children?: NavItemsType[];
};

export type SimpleSubmenuItem = {
  id: string;
  title: string;
  href: string;
};

export type MegamenuItem = {
  id: number;
  title: string;
  description?: string;
  image: string;
  category: string;
  created_at: string;
  href: string;
};

export type SubmenuChildren = SimpleSubmenuItem[] | MegamenuItem[];

export type SubmenuProps = {
  id: string;
  title: string;
  children: SubmenuChildren;
};

export type DropDownItemProps = SubmenuProps;

export type SubmenuItemProps = SubmenuProps;

export type MegamenuProps = {
  items: SubmenuChildren;
};
