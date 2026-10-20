import {
  LayoutDashboard,
  House,
  CircleHelp,
  BriefcaseBusiness,
  CalendarDays,
  Image,
  Newspaper,
  HeartHandshake,
  Phone,
  Users,
  ShieldCheck,
  Settings,
} from "lucide-react";

const sidebarData = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },

  {
    title: "Homepage",
    icon: House,

    children: [
      {
        title: "Hero",
        path: "/admin/homepage/hero",
      },
      {
        title: "About",
        path: "/admin/homepage/about",
      },
      {
        title: "Services",
        path: "/admin/homepage/services",
      },
      {
        title: "WhyChoose us",
        path: "/admin/homepage/whychooseus",
      },
      {
        title: "Events",
        path: "/admin/homepage/events",
      },
      {
        title: "Gallery",
        path: "/admin/homepage/gallery",
      },
      {
        title: "Transparency",
        path: "/admin/homepage/transparency",
      },
      {
        title: "Statistics",
        path: "/admin/homepage/statistics",
      },
      {
        title: "Testimonials",
        path: "/admin/homepage/testimonials",
      },
      {
        title: "SEO",
        path: "/admin/homepage/seo",
      },
    ],
  },

  {
    title: "About",
    icon: CircleHelp,
    path: "/admin/about",
  },

  {
    title: "Services",
    icon: BriefcaseBusiness,
    path: "/admin/services",
  },

  {
    title: "Events",
    icon: CalendarDays,
    path: "/admin/events",
  },

  {
    title: "Gallery",
    icon: Image,
    path: "/admin/gallery",
  },

  {
    title: "Blog",
    icon: Newspaper,
    path: "/admin/blog",
  },

  {
    title: "Volunteer",
    icon: HeartHandshake,
    path: "/admin/volunteer",
  },

  {
    title: "Contact",
    icon: Phone,
    path: "/admin/contact",
  },

  {
    title: "Users",
    icon: Users,
    path: "/admin/users",
  },

  {
    title: "Roles",
    icon: ShieldCheck,
    path: "/admin/roles",
  },

  {
    title: "Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];

export default sidebarData;