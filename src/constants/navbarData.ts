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
      { id: "default", title: "Default", href: "/default" },
      { id: "noSideBar", title: "No Sidebar", href: "/no-sidebar" },
      { id: "sideBarLeft", title: "Sidebar Left", href: "/sidebar-left" },
      { id: "heroImage", title: "Hero Image", href: "/hero-image" },
    ],
  },
  {
    id: "policy",
    title: "Policy",
    href: "/policy",
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
    id: "megamenu",
    title: "Megamenu",
    href: "#",
  },
  {
    id: "contact",
    title: "Contact",
    href: "#",
  },
  {
    id: "blog",
    title: "Blog",
    href: "#",
  },
];
