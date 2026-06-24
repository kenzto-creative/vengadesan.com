import { PROJECT_IMAGES } from "@/lib/project-images";

export const ROLES = [
  "Graphic Designer",
  "UX/UI Designer",
  "Video Editor",
  "Motion Graphics Designer",
  "Front-End Developer",
] as const;

export const ABOUT_EXPERIENCE = [
  { title: "Freelance Designer", subtitle: "Venzto Design Studio, 2027 — present", active: true },
  { title: "Product Designer", subtitle: "Vyssr Solutions, 2025 — 2027", active: true },
  { title: "Graphic & UX/UI Designer", subtitle: "ABC Web Studio, 2023 — 2025", active: true },
  { title: "Design Intern", subtitle: "ABC Web Studio, 2022 — 2023", active: true },
] as const;

export const ABOUT_EDUCATION = [
  {
    title: "Bachelor's Of Commerce",
    subtitle: "National College - Trichy, Bharathitharsan University, 2019 — 2022",
    active: true,
  },
  {
    title: "Certification in Graphic And UX/UI Designer",
    subtitle: "Buff Creative Collage, 2022",
    active: true,
  },
] as const;

export const HOBBIES = ["Video Games", "Editing", "Gym"] as const;

export const CERTIFICATES = [
  { title: "Vistiq - Spa Wellness", image: PROJECT_IMAGES.vistiq },
  { title: "UX Design Certificate", image: PROJECT_IMAGES.designcube },
  { title: "Framer Pro Course", image: PROJECT_IMAGES.showcase },
  { title: "Motion Design Basics", image: PROJECT_IMAGES.predict },
] as const;

export const EXPERIENCE = [
  {
    role: "Senior Product Designer",
    company: "Kenzto Creative Solutions",
    period: "2022 — Present",
    description:
      "Leading product design for SaaS and agency clients, from discovery through high-fidelity prototypes and design systems.",
  },
  {
    role: "UI/UX Designer",
    company: "Freelance",
    period: "2019 — 2022",
    description:
      "Designed and shipped Framer websites, mobile apps, and brand identities for startups and creative agencies.",
  },
  {
    role: "Visual Designer",
    company: "Creative Studio",
    period: "2017 — 2019",
    description:
      "Crafted brand identities, marketing assets, and web layouts for local and international clients.",
  },
] as const;

export const EDUCATION = [
  {
    degree: "Bachelor of Design",
    school: "Design Institute",
    period: "2015 — 2019",
    description:
      "Focused on interaction design, visual communication, and human-centered design principles.",
  },
] as const;

export type ToolSkill = {
  name: string;
  description: string;
  initial?: string;
};

export type ToolSkillCategory = {
  title: string;
  skills: ToolSkill[];
};

export const TOOL_SKILL_CATEGORIES: ToolSkillCategory[] = [
  {
    title: "Design & Prototyping",
    skills: [
      { name: "Figma", description: "(UI/UX, design systems, component libraries)" },
      {
        name: "Adobe Creative Cloud",
        description: "(Photoshop, Illustrator, After Effects, Premiere Pro)",
        initial: "A",
      },
      { name: "Blender", description: "(2D/3D design & motion graphics integration)", initial: "B" },
      { name: "Spline", description: "(Interactive 3D & animation for web/mobile)", initial: "S" },
      { name: "Rive", description: "(modern, fluid UI animations)", initial: "R" },
    ],
  },
  {
    title: "Front-End & Low-Code Development",
    skills: [
      { name: "HTML5", description: "(Hyper Text Mockup Language)", initial: "H" },
      { name: "CSS3", description: "(component-driven interfaces)", initial: "C" },
      { name: "Tailwind CSS", description: "(utility-first styling)", initial: "T" },
      { name: "JavaScript", description: "(interactive web experiences)", initial: "J" },
      { name: "Framer Motion", description: "(motion for React interfaces)", initial: "M" },
      { name: "React", description: "(component-driven interfaces)", initial: "R" },
      { name: "Next.js", description: "(production React apps)", initial: "N" },
      { name: "Webflow", description: "(low-code web development)", initial: "W" },
      { name: "Wix Studio", description: "(visual site building)", initial: "W" },
      { name: "Bubble.io", description: "(no-code app building)", initial: "B" },
    ],
  },
  {
    title: "UX Research & Testing",
    skills: [
      { name: "Maze", description: "(remote user testing)", initial: "M" },
      { name: "Hotjar", description: "(behavior analytics)", initial: "H" },
      { name: "Notion", description: "(workflow automation)", initial: "N" },
    ],
  },
  {
    title: "AI & Productivity",
    skills: [
      { name: "ChatGPT", description: "(UX copywriting & idea generation)", initial: "C" },
      { name: "Midjourney", description: "(AI-assisted concept art & prototyping)", initial: "M" },
      { name: "Premiere Pro", description: "(video editing for product demos)", initial: "P" },
      { name: "DaVinci Resolve", description: "(color grading & cinematic visuals)", initial: "D" },
    ],
  },
];

export const SOFT_SKILL_CATEGORIES: ToolSkillCategory[] = [
  {
    title: "Collaboration",
    skills: [
      { name: "Cross-Disciplinary Communication", description: "(design, dev, and stakeholders)" },
      { name: "Design Critique", description: "(feedback loops and iteration)" },
    ],
  },
  {
    title: "Strategy",
    skills: [
      { name: "User Research", description: "(interviews, testing, synthesis)" },
      { name: "Design Systems", description: "(scalable component thinking)" },
    ],
  },
];

export const CONTACT_FORM = {
  fullName: "Vengadesan r",
  email: "kenzto.creative@gmail.com",
  company: "Kenzto Creative Solutions",
  phone: "+91 70105 59179",
  message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
} as const;

export const CONTACT_INFO = {
  email: "hello.kenzto@gmail.com",
  phone: "+91 81481 76914",
} as const;

export type TutorialSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type TutorialDetail = {
  slug: string;
  title: string;
  date: string;
  duration: string;
  gradient: string;
  heroImage: string;
  intro: string;
  sections: TutorialSection[];
};

export const TUTORIAL_DETAILS: Record<string, TutorialDetail> = {
  "responsive-layouts": {
    slug: "responsive-layouts",
    title: "Designing Seamless User Experiences:\nResponsive Layouts in Framer",
    date: "Feb 14, 2024",
    duration: "08:44",
    gradient: "from-[#8CFFB6] to-[#214ADE]",
    heroImage: PROJECT_IMAGES.showcase,
    intro:
      'Embark on a journey of user-centric design excellence with our tutorial series, "Designing Seamless User Experiences." This tutorial series is a comprehensive guide to mastering responsive layouts within Framer, ensuring your designs seamlessly adapt to various screen sizes, creating an optimal user experience across devices.',
    sections: [
      {
        heading: "Understanding the Importance of Responsive Design",
        bullets: [
          "Dive into the fundamentals of responsive design and understand its pivotal role in crafting adaptable and user-friendly interfaces.",
          "Explore the benefits of responsive layouts, from improved accessibility to enhanced user engagement.",
        ],
      },
      {
        heading: "Navigating Framer's Responsive Design Features",
        bullets: [
          "Learn how to navigate Framer's responsive design features, unlocking a toolkit designed to simplify the creation of layouts that adapt effortlessly.",
          "Explore the flexibility of Framer's grid systems, constraints, and responsive components for fluid and responsive designs.",
        ],
      },
      {
        heading: "Crafting Multi-Device Layouts for Consistency",
        bullets: [
          "Master the art of crafting multi-device layouts that maintain consistency and coherence across various screen sizes.",
          "Explore techniques for adjusting spacing, typography, and element placement to ensure a seamless user experience on both desktop and mobile platforms.",
        ],
      },
      {
        heading: "Prototyping Responsiveness in Real-Time",
        bullets: [
          "Dive into hands-on exercises for prototyping responsive designs in real-time within Framer.",
          "Understand the importance of testing responsiveness during the prototyping phase, allowing you to identify and address potential challenges early in the design process.",
        ],
      },
      {
        heading: "User-Centric Design Approaches for Mobile and Desktop",
        bullets: [
          "Explore user-centric design approaches for both mobile and desktop experiences, tailoring your layouts to meet the specific needs of each user group.",
          "Delve into practical examples and best practices for creating adaptive designs that resonate with your audience.",
        ],
      },
      {
        heading: "Conclusion: Elevating Design Consistency Across Platforms",
        bullets: [
          "Congratulations on completing the tutorial series! You're now equipped to design seamless user experiences with responsive layouts in Framer.",
          "Stay tuned for more insights, advanced tutorials, and expert tips to continually refine and elevate your responsive design skills.",
        ],
      },
    ],
  },
};

export const PROJECTS = [
  {
    slug: "xzero",
    title: "+XZERO® Website made in Framer",
    category: "Agency Template",
    image: PROJECT_IMAGES.xzero,
  },
  {
    slug: "charmant",
    title: "Charmant Framer Website",
    category: "Web Design",
    image: PROJECT_IMAGES.charmant,
  },
  {
    slug: "predict",
    title: "Predict Screen",
    category: "SaaS",
    image: PROJECT_IMAGES.predict,
  },
  {
    slug: "designcube",
    title: "DesignCube Framer Website",
    category: "Web Design",
    image: PROJECT_IMAGES.designcube,
  },
  {
    slug: "healthwell",
    title: "HealthWell Website in Framer",
    category: "Healthcare",
    image: PROJECT_IMAGES.healthwell,
  },
  {
    slug: "huggl",
    title: "Huggl 2.0",
    category: "Product",
    image: PROJECT_IMAGES.huggl,
  },
] as const;

export type ListingProject = {
  slug?: string;
  title: string;
  date: string;
  category: string;
  image: string;
};

export type ProjectListingSection = {
  title: string;
  projects: ListingProject[];
};

export const TOTAL_PROJECT_COUNT = 34;

export const PROJECT_LISTING_SECTIONS: ProjectListingSection[] = [
  {
    title: "Mobile Application",
    projects: [
      {
        slug: "healthwell",
        title: "AGRI GO - Farmer product Selling",
        date: "Oct 2022, 2022",
        category: "Mobile App",
        image: PROJECT_IMAGES.agriGo,
      },
      {
        title: "JOBBER - Part-Time Job",
        date: "Oct 07, 2022",
        category: "Mobile App",
        image: PROJECT_IMAGES.jobber,
      },
    ],
  },
  {
    title: "Website",
    projects: [
      {
        slug: "xzero",
        title: "+XZERO® Website made in Framer",
        date: "Nov 14, 2022",
        category: "Web Design",
        image: PROJECT_IMAGES.xzero,
      },
      {
        slug: "charmant",
        title: "Charmant Framer Website",
        date: "Oct 21, 2022",
        category: "Web Design",
        image: PROJECT_IMAGES.charmant,
      },
      {
        slug: "designcube",
        title: "DesignCube Framer Website",
        date: "Sep 18, 2022",
        category: "Web Design",
        image: PROJECT_IMAGES.designcube,
      },
    ],
  },
  {
    title: "Smart Watch",
    projects: [
      {
        slug: "predict",
        title: "Predict Screen",
        date: "Aug 12, 2022",
        category: "Smart Watch",
        image: PROJECT_IMAGES.predict,
      },
    ],
  },
  {
    title: "Graphic Design",
    projects: [
      {
        title: "Brand Identity — Vistiq",
        date: "Jul 04, 2022",
        category: "Graphic Design",
        image: PROJECT_IMAGES.vistiq,
      },
    ],
  },
  {
    title: "Video Editing",
    projects: [
      {
        title: "Framer Motion Reel",
        date: "Jun 19, 2022",
        category: "Video Editing",
        image: PROJECT_IMAGES.showcase,
      },
    ],
  },
  {
    title: "2D Animation",
    projects: [
      {
        title: "Product Launch Loop",
        date: "May 02, 2022",
        category: "2D Animation",
        image: PROJECT_IMAGES.designcube,
      },
    ],
  },
];

export const TUTORIALS = [
  {
    slug: "framer-advanced-animation",
    title: "Framer's Advanced Animation: A Masterclass in Dynamic Designs",
    date: "Feb 7, 2024",
    duration: "11:27",
    gradient: "from-[#214ADE] to-[#4E5DE4]",
  },
  {
    slug: "framer-basics",
    title: "Mastering Framer Basics: A Step-by-Step Guide for Beginners",
    date: "Nov 1, 2023",
    duration: "12:06",
    gradient: "from-[#F7A307] to-[#FFB84D]",
  },
  {
    slug: "responsive-layouts",
    title: "Designing Seamless User Experiences: Responsive Layouts in Framer",
    date: "Feb 14, 2024",
    duration: "08:44",
    gradient: "from-[#8CFFB6] to-[#214ADE]",
  },
] as const;

export type TutorialListingItem = {
  slug: string;
  listingTitle: string;
  date: string;
  duration: string;
  thumbnail: string;
  category: string;
};

export const TUTORIAL_LISTING: TutorialListingItem[] = [
  {
    slug: "responsive-layouts",
    listingTitle: "Logo Design Tutorial",
    date: "Feb 14, 2024",
    duration: "08:44",
    thumbnail: PROJECT_IMAGES.tutorialResponsive,
    category: "Framer",
  },
  {
    slug: "framer-advanced-animation",
    listingTitle: "Figma Tips",
    date: "Feb 7, 2024",
    duration: "11:27",
    thumbnail: PROJECT_IMAGES.tutorialAdvanced,
    category: "Figma",
  },
  {
    slug: "framer-basics",
    listingTitle: "Mastering Framer Basics",
    date: "Nov 1, 2023",
    duration: "12:06",
    thumbnail: PROJECT_IMAGES.xzero,
    category: "Framer",
  },
];

export function getTutorialDetail(slug: string): TutorialDetail | undefined {
  const detail = TUTORIAL_DETAILS[slug];
  if (detail) return detail;

  const tutorial = TUTORIALS.find((item) => item.slug === slug);
  if (!tutorial) return undefined;

  return {
    slug: tutorial.slug,
    title: tutorial.title,
    date: tutorial.date,
    duration: tutorial.duration,
    gradient: tutorial.gradient,
    heroImage: PROJECT_IMAGES.xzero,
    intro: `${tutorial.title} — a practical walkthrough for designers building in Framer.`,
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "This tutorial covers core concepts, workflow tips, and hands-on techniques you can apply directly in your next project.",
        ],
      },
    ],
  };
}

export const SKILL_CATEGORIES = [
  {
    title: "Design Tools",
    skills: ["Figma", "Framer", "Photoshop", "Illustrator"],
  },
  {
    title: "Prototyping",
    skills: ["Framer Motion", "Interactive Components", "Design Systems"],
  },
  {
    title: "Development",
    skills: ["HTML/CSS", "React", "Next.js", "Tailwind CSS"],
  },
] as const;

export type ProjectContentSection = {
  heading: string;
  level?: "h2" | "h3";
  paragraphs?: string[];
  bullets?: string[];
};

export type RelatedProjectCard = {
  slug?: string;
  title: string;
  date: string;
  category: string;
  image: string;
};

export type ProjectDetail = {
  slug: string;
  title: string;
  category: string;
  image: string;
  client: string;
  year: string;
  duration?: string;
  role: string;
  tools: string[];
  overview: string;
  challenge: string;
  solution: string;
  intro?: string;
  heroImage?: string;
  galleryImages?: string[];
  sections?: ProjectContentSection[];
  features?: string[];
  relatedProjects?: RelatedProjectCard[];
  liveUrl?: string;
  hireUrl?: string;
};

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  xzero: {
    slug: "xzero",
    title: "+XZERO® Website made in Framer",
    category: "Web Design",
    image: PROJECT_IMAGES.xzero,
    heroImage: PROJECT_IMAGES.xzeroHero,
    galleryImages: [PROJECT_IMAGES.showcase, PROJECT_IMAGES.designcube],
    client: "Xzero Inc.",
    year: "2024",
    duration: "2 weeks",
    role: "Product Designer",
    tools: ["Framer", "Figma", "Photoshop"],
    intro:
      "Transform your creative vision into reality with +XZERO®, a premium and versatile Framer template crafted for design-forward agencies, studios, and makers. +XZERO® is the ultimate starting point for teams aiming to build stunning digital portfolios, showcase bold projects, and communicate brand excellence with clarity and impact.",
    overview:
      "A bold agency template built in Framer for creative studios who want a high-impact web presence with smooth motion and responsive layouts.",
    challenge:
      "Create a distinctive brand experience that balances editorial typography, dark aesthetics, and conversion-focused case study layouts.",
    solution:
      "Designed a modular page system with bento-style grids, animated hero sections, and reusable components that scale from portfolio to SaaS landing pages.",
    sections: [
      {
        heading: "My Approach",
        level: "h2",
        paragraphs: [
          "With +XZERO®, I set out to design a template that merges creativity with functionality, giving agencies, studios, and businesses a premium digital framework to showcase their expertise. Every element — from color styles to scroll effects — was selected to help teams communicate boldly, streamline workflows, and create meaningful connections. The focus is not only on beautiful design but on giving you the tools to tell your story with impact.",
        ],
      },
      {
        heading: "Vision and Innovation",
        level: "h3",
        paragraphs: [
          "+XZERO® is built on a vision of empowering forward-thinking agencies to go beyond ordinary web templates. Using modern design aesthetics, parallax scrolling, sticky sections, animations, and smooth scroll interactions, it crafts a digital experience that feels cutting-edge and immersive. It's not just a website — it's a modular, scalable system designed to evolve with your business and showcase everything from standout projects to team growth.",
        ],
      },
      {
        heading: "Identifying Unique Challenges",
        level: "h3",
        paragraphs: [
          "For creative agencies, the challenge lies in juggling diverse content types (projects, services, articles, jobs) while maintaining a clear, cohesive voice across all digital touchpoints. +XZERO® directly addresses this with 10 robust CMS collections, making it easy to manage dynamic content like Projects/Services Categories, Project Pages, Articles, Article Pages, Careers/Job Types, Job Pages, and Legal pages — all without sacrificing design integrity.",
        ],
      },
      {
        heading: "Resolving Complex Problems",
        level: "h3",
        paragraphs: [
          "Agencies often struggle to balance bold visuals with performance, SEO, and accessibility. +XZERO® resolves these issues by blending advanced design features (custom cursor, scroll sections, overlays, effects) with technical optimization (SEO, A11y standards, fast load times, responsive breakpoints). This means your site performs beautifully on any device while offering a captivating, high-end visual experience that aligns with your brand's identity.",
        ],
      },
      {
        heading: "User-Centric Design",
        level: "h3",
        paragraphs: [
          "At the heart of +XZERO® is a commitment to user-centered design. Every page — from the Careers/Job Type (CMS) to the Projects/Services Categories (CMS) — is structured for intuitive navigation, making it easy for visitors to explore, learn, and take action. Integrated forms, site search, and smooth scrolling further enhance usability, ensuring a seamless experience for prospective clients, collaborators, or recruits.",
        ],
      },
      {
        heading: "Meeting User Needs",
        level: "h3",
        paragraphs: [
          "Whether your goal is to win new business, attract top talent, or showcase your creative achievements, +XZERO® meets both agency and end-user needs. For your team, it offers an easy-to-manage, modular system. For visitors, it delivers a responsive, accessible, and visually compelling experience that makes exploring your platform a pleasure.",
        ],
      },
      {
        heading: "Detailed Pages and Features",
        level: "h2",
        bullets: [
          "Home, About, Projects, Services, Articles, and Careers pages",
          "Projects/Services Categories (CMS) and Project Pages (CMS)",
          "Articles & Article Pages (CMS)",
          "Careers/Job Types (CMS) and Job Pages (CMS)",
          "Legal pages, contact forms, and site search",
          "Custom cursor, scroll sections, overlays, and motion effects",
          "SEO, A11y, responsive breakpoints, and fast load performance",
        ],
      },
      {
        heading: "Accessibility and Optimization",
        level: "h3",
        paragraphs: [
          "+XZERO® is fully A11y optimized, ensuring inclusivity for all visitors, including those using assistive technologies. SEO and performance enhancements guarantee high search rankings, fast loading, and smooth responsiveness across all breakpoints and devices. Combined with web fonts, custom text and link styles, and advanced components, it delivers a polished, professional experience that's as functional as it is beautiful.",
        ],
      },
      {
        heading: "Conclusion",
        level: "h3",
        paragraphs: [
          "+XZERO® is not just another agency template — it's a sophisticated, scalable digital solution for teams that want to inspire, connect, and drive results. Whether you're showcasing bold projects, attracting top talent, or building thought leadership, +XZERO® gives you the design power and technical backbone to elevate your agency's digital presence and stand out in a competitive landscape. Let +XZERO® help you craft a platform that transforms ambition into action.",
        ],
      },
    ],
    relatedProjects: [
      {
        slug: "charmant",
        title: "Wedora Website made in Framer",
        date: "Nov 21, 2024",
        category: "Web Design",
        image: PROJECT_IMAGES.wedora,
      },
      {
        title: "Vistiq - Spa Wellness",
        date: "Dec 18, 2024",
        category: "Designer portfolio",
        image: PROJECT_IMAGES.vistiq,
      },
    ],
    liveUrl: "https://framer.com",
    hireUrl: "/contact",
  },
};

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  const detail = PROJECT_DETAILS[slug];
  if (detail) return detail;

  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) return undefined;

  return {
    slug: project.slug,
    title: project.title,
    category: project.category,
    image: project.image,
    heroImage: project.image,
    galleryImages: [project.image, project.image],
    client: project.category,
    year: "2024",
    duration: "2 weeks",
    role: "Product Designer",
    tools: ["Framer", "Figma"],
    intro: `${project.title} — a selected project showcasing product and visual design craft.`,
    overview: `${project.title} — a selected project showcasing product and visual design craft.`,
    challenge: "Deliver a polished digital experience aligned with brand goals and user needs.",
    solution: "Built responsive layouts, refined typography, and motion-driven interactions in Framer.",
    sections: [
      {
        heading: "Overview",
        level: "h2",
        paragraphs: [
          `${project.title} — a selected project showcasing product and visual design craft.`,
        ],
      },
      {
        heading: "Challenge",
        level: "h3",
        paragraphs: [
          "Deliver a polished digital experience aligned with brand goals and user needs.",
        ],
      },
      {
        heading: "Solution",
        level: "h3",
        paragraphs: [
          "Built responsive layouts, refined typography, and motion-driven interactions in Framer.",
        ],
      },
    ],
    relatedProjects: PROJECTS.filter((item) => item.slug !== project.slug)
      .slice(0, 2)
      .map((item) => ({
        slug: item.slug,
        title: item.title,
        date: "2024",
        category: item.category,
        image: item.image,
      })),
    hireUrl: "/contact",
  };
}

export const MEDIA_SHORTS = [
  { id: "1", title: "Design Process", image: PROJECT_IMAGES.vistiq, type: "image" as const },
  { id: "2", title: "Framer Motion", image: PROJECT_IMAGES.xzero, type: "video" as const },
  { id: "3", title: "UI Exploration", image: PROJECT_IMAGES.predict, type: "image" as const },
  { id: "4", title: "Portfolio Walkthrough", image: PROJECT_IMAGES.charmant, type: "video" as const },
] as const;

export const MEGA_MENU_FEATURED = {
  center: "/images/mega-featured-video.png",
  left: "/images/mega-featured-side-left.png",
  right: "/images/mega-featured-side-right.png",
} as const;

export const MEGA_MENU_SHORTS = [
  { id: "1", image: "/images/mega-short-1.png", href: "/videos" },
  { id: "2", image: "/images/mega-short-2-5353a5.png", href: "/images" },
  { id: "3", image: "/images/mega-short-3-77eee4.png", href: "/videos" },
] as const;

export const IMAGE_FILTER_OPTIONS = [
  "All",
  "UI Design",
  "Branding",
  "Process",
] as const;

export type ImageFilterOption = (typeof IMAGE_FILTER_OPTIONS)[number];

export type ImageListingItem = {
  id: string;
  title: string;
  image: string;
  previewImage?: string;
  category: string;
};

export function getImageListingItem(id: string) {
  return IMAGE_LISTING.find((item) => item.id === id);
}

export function getImageListingNeighbors(id: string) {
  const index = IMAGE_LISTING.findIndex((item) => item.id === id);
  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? IMAGE_LISTING[index - 1] : null,
    next: index < IMAGE_LISTING.length - 1 ? IMAGE_LISTING[index + 1] : null,
  };
}

export const IMAGE_LISTING: ImageListingItem[] = [
  {
    id: "1",
    title: "Visual Exploration",
    image: "/images/mega-short-1.png",
    previewImage: "/images/image-preview-hero.png",
    category: "UI Design",
  },
  {
    id: "2",
    title: "Interface Snapshot",
    image: "/images/mega-short-2-5353a5.png",
    category: "Branding",
  },
  {
    id: "3",
    title: "Design Process",
    image: "/images/mega-short-3-77eee4.png",
    category: "Process",
  },
  {
    id: "4",
    title: "Layout Study",
    image: "/images/listing-image-4.png",
    category: "UI Design",
  },
  {
    id: "5",
    title: "Creative Direction",
    image: "/images/listing-image-5-639f71.png",
    category: "Branding",
  },
  {
    id: "6",
    title: "Portfolio Frame",
    image: "/images/listing-image-6.png",
    category: "Process",
  },
];

export const VIDEO_FILTER_OPTIONS = [
  "All",
  "Framer",
  "Design",
  "Portfolio",
] as const;

export type VideoFilterOption = (typeof VIDEO_FILTER_OPTIONS)[number];

export type VideoFormat = "full" | "short";

export type VideoListingItem = {
  id: string;
  title: string;
  image: string;
  category: string;
  format: VideoFormat;
  href?: string;
};

export const VIDEO_LISTING: VideoListingItem[] = [
  {
    id: "1",
    title: "Framer Motion Study",
    image: "/images/listing-video-1-25ed80.png",
    category: "Framer",
    format: "short",
    href: "/tutorials/framer-advanced-animation",
  },
  {
    id: "2",
    title: "UI Walkthrough",
    image: "/images/listing-video-2-5b0c6a.png",
    category: "Design",
    format: "short",
  },
  {
    id: "3",
    title: "Design Process Reel",
    image: "/images/listing-video-3-113e5c.png",
    category: "Portfolio",
    format: "full",
  },
  {
    id: "4",
    title: "Master in Design Preview",
    image: "/images/mega-featured-video.png",
    category: "Design",
    format: "full",
    href: "/projects/xzero",
  },
  {
    id: "5",
    title: "Responsive Layout Tips",
    image: "/images/tutorial-responsive-304349.png",
    category: "Framer",
    format: "full",
    href: "/tutorials/responsive-layouts",
  },
  {
    id: "6",
    title: "Portfolio Short",
    image: "/images/listing-video-2-5b0c6a.png",
    category: "Portfolio",
    format: "short",
  },
];

export const DASHBOARD_CATEGORIES = [
  { label: "Website", value: "34" },
  { label: "Web App", value: "03" },
  { label: "Mobile App", value: "10" },
  { label: "Smart Watch", value: "10" },
] as const;

export const DASHBOARD_TOTALS = {
  projects: "34",
  tutorials: "03",
  certificates: "03",
  awards: "03",
  clients: "03",
} as const;

export const PROFILE_IMAGE_POSTS = [
  { id: "1", image: "/images/profile-post-1.png", alt: "Profile post 1" },
  { id: "2", image: "/images/profile-post-2.png", alt: "Profile post 2" },
  { id: "3", image: "/images/profile-post-3-2fd529.png", alt: "Profile post 3" },
  { id: "4", image: "/images/profile-post-4-395027.png", alt: "Profile post 4" },
] as const;

export const PROFILE_VIDEO_POSTS = [
  {
    id: "1",
    image: "/images/profile-post-video-1-25385e.png",
    alt: "Profile video post 1",
  },
  {
    id: "2",
    image: "/images/profile-post-video-2.png",
    alt: "Profile video post 2",
  },
] as const;

export const FRIEND_MUTUAL_AVATARS = [
  "/images/friend-mutual-1.png",
  "/images/friend-mutual-2.png",
  "/images/friend-mutual-3.png",
  "/images/friend-mutual-4.png",
  "/images/friend-mutual-5.png",
] as const;

export type FriendFilterOption = "All" | "Designers" | "Developers";

export const FRIEND_FILTER_OPTIONS: FriendFilterOption[] = [
  "All",
  "Designers",
  "Developers",
];

export const PROFILE_FRIENDS = [
  {
    id: "1",
    name: "Sindhiya",
    role: "UX/UI Designer",
    image: "/images/friend-1.png",
    category: "Designers" as FriendFilterOption,
  },
  {
    id: "2",
    name: "Arjun",
    role: "Product Designer",
    image: "/images/friend-2.png",
    category: "Designers" as FriendFilterOption,
  },
  {
    id: "3",
    name: "Meera",
    role: "Visual Designer",
    image: "/images/friend-3.png",
    category: "Designers" as FriendFilterOption,
  },
  {
    id: "4",
    name: "Karthik",
    role: "Frontend Developer",
    image: "/images/friend-4.png",
    category: "Developers" as FriendFilterOption,
  },
  {
    id: "5",
    name: "Priya",
    role: "Brand Designer",
    image: "/images/friend-5.png",
    category: "Designers" as FriendFilterOption,
  },
  {
    id: "6",
    name: "Rahul",
    role: "Motion Designer",
    image: "/images/friend-6.png",
    category: "Designers" as FriendFilterOption,
  },
] as const;
