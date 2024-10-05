export interface NavItem {
  name: string;
  link: string;
  dropdown?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "Projects",
    link: "/projects",
    dropdown: [
      {
        name: "Project 1",
        link: "/project-1",
      },
      {
        name: "Project 2",
        link: "/project-2",
      },
      {
        name: "Project 2",
        link: "/project-2",
      },
    ],
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
