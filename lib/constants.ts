import {
  Home,
  User,
  Layers,
  FolderKanban,
  PlaySquare,
  Phone,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "VENGAT R.",
  title: "Product Designer",
  copyright: "Designed by vengat",
  cvUrl: "/cv.pdf",
} as const;

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Me", href: "/about", icon: User },
  { label: "Stack", href: "/stack", icon: Layers },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Tutorials", href: "/tutorials", icon: PlaySquare },
  { label: "Contact", href: "/contact", icon: Phone },
];

export const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" as const },
  { label: "Dribbble", href: "https://dribbble.com", icon: "dribbble" as const },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" as const },
];

export const STACK_TOOLS = [
  { name: "Notion", color: "#FFFFFF" },
  { name: "Framer", color: "#FFFFFF" },
  { name: "Figma", color: "#FFFFFF" },
  { name: "Photoshop", color: "#FFFFFF", image: "/images/photoshop.png" },
  { name: "ChatGPT", color: "#FFFFFF" },
];

export const PROJECT_IMAGES = [
  "/images/project-1-5fabb5.png",
  "/images/showcase-76bdb7.png",
  "/images/project-1-5fabb5.png",
  "/images/showcase-76bdb7.png",
  "/images/project-1-5fabb5.png",
  "/images/showcase-76bdb7.png",
  "/images/project-1-5fabb5.png",
  "/images/showcase-76bdb7.png",
  "/images/project-1-5fabb5.png",
];

export const AVATARS = [
  { src: "/images/avatar-1-769eb6.png", ring: "#FFB5FE" },
  { src: "/images/avatar-2-5879ba.png", ring: "#8CFFB6" },
  { src: "/images/avatar-3-16f954.png", ring: "#FFC6A3" },
];
