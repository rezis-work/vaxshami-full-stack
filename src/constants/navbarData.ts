export const navItems = [
  {
    id: "home",
    title: "Home",
    href: "/",
  },
  {
    id: "posts",
    title: "Posts",
    children: [
      {
        id: "default",
        title: "Default",
        href: "/blog/68e6ed1600343df0cfdf",
      },
      {
        id: "heroImage",
        title: "Hero Image",
        href: "/heroPage/68e7934a0009be12b61c",
      },
    ],
  },

  {
    id: "features",
    title: "Features",
    children: [
      { id: "submenu-1", title: "Submenu 1", href: "#" },
      { id: "submenu-2", title: "Submenu 2", href: "#" },
      { id: "submenu-3", title: "Submenu 3", href: "#" },
      { id: "submenu-4", title: "Submenu 4", href: "#" },
    ],
  },
  {
    id: "pages",
    title: "Pages",
    children: [
      { id: "about", title: "About us", href: "/about" },
      { id: "team", title: "Meet our team", href: "/team" },
      { id: "faq", title: "FAQs", href: "/faqs" },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    href: "/contact",
  },
];
