import {
  Home,
  User,
  Layers,
  FolderKanban,
  PlaySquare,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { PROJECT_IMAGES } from "@/lib/project-images";

export const SITE = {
  name: "VENGAT R.",
  title: "Product Designer",
  copyright: "Designed by vengat",
  cvUrl: "/cv",
  cvDownload: "/cv.pdf",
} as const;

export const PROFILE = {
  fullName: "VENGADESAN R.",
  headline: "Product Designer",
  bio: "I specialize in crafting visually striking and user-friendly digital experiences. With a passion for blending aesthetics and functionality, I bring ideas to life, creating innovative solutions in the dynamic world of web design.",
  about:
    "A UX/UI Designer loves solving complex problems in simple, clean, elegant designs. I appreciate the techniques that demonstrate thoughtful interaction, clear hierarchy, and polished visual storytelling across web and product experiences.",
  languages: "Tamil, English",
  dateOfBirth: "30/06/2002",
  phone: "+91 70105 59179",
  email: "vengadesan.rasokkiyam@gmail.com",
  location: "Chennai, Tamil Nadu",
  heroImage: "/images/profile-hero.png",
  heroFlipPattern: "/images/profile-hero-flip.svg",
} as const;

export type ProfileTab = "bio" | "objective" | "post";

export const PROFILE_TABS: {
  id: ProfileTab;
  label: string;
  href: string;
}[] = [
  { id: "bio", label: "Bio", href: "/profile" },
  { id: "objective", label: "Objective", href: "/profile/objective" },
  { id: "post", label: "Post", href: "/profile/post" },
];

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

export const HOME_PROJECT_TILES = [
  { src: PROJECT_IMAGES.charmant, alt: "Charmant Framer Website", style: "left-0 top-[6%] h-[31%] w-[35%]" },
  { src: PROJECT_IMAGES.predict, alt: "Predict Screen", style: "left-0 top-[37%] h-[31%] w-[35%]" },
  { src: PROJECT_IMAGES.huggl, alt: "Huggl 2.0", style: "left-0 top-[68%] h-[31%] w-[35%]" },
  { src: PROJECT_IMAGES.xzero, alt: "+XZERO Screen", style: "left-[32.5%] top-0 h-[31%] w-[35%]" },
  { src: PROJECT_IMAGES.wedora, alt: "Wedora Screen", style: "left-[32.5%] top-[31%] h-[31%] w-[35%]" },
  { src: PROJECT_IMAGES.vistiq, alt: "Vistiq", style: "left-[32.5%] top-[63%] h-[31%] w-[35%]" },
  { src: PROJECT_IMAGES.designcube, alt: "DesignCube Framer Website", style: "left-[65%] top-[5%] h-[31%] w-[35%]" },
  { src: PROJECT_IMAGES.healthwell, alt: "HealthWell Website in Framer", style: "left-[65%] top-[36%] h-[31%] w-[35%]" },
  { src: PROJECT_IMAGES.thelist, alt: "Thelist Framer Website", style: "left-[65%] top-[68%] h-[31%] w-[35%]" },
] as const;

export const AVATARS = [
  { src: "/images/avatar-1-769eb6.png", ring: "#FFB5FE" },
  { src: "/images/avatar-2-5879ba.png", ring: "#8CFFB6" },
  { src: "/images/avatar-3-16f954.png", ring: "#FFC6A3" },
];
