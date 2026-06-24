export const PROJECT_IMAGES = {
  charmant: "/images/charmant-5fabb5.png",
  predict: "/images/predict-603874.png",
  huggl: "/images/huggl-516b05.png",
  xzero: "/images/xzero-56586a.png",
  wedora: "/images/wedora-419428.png",
  vistiq: "/images/vistiq-56586a.png",
  designcube: "/images/designcube-5fabb5.png",
  healthwell: "/images/healthwell-603874.png",
  thelist: "/images/thelist-516b05.png",
  agriGo: "/images/agri-go-56586a.png",
  jobber: "/images/jobber-419428.png",
  showcase: "/images/showcase-master.png",
  xzeroHero: "/images/xzero-hero-56586a.png",
  masterDesign: "/images/master-design-70d4c8.png",
  tutorialResponsive: "/images/tutorial-responsive-304349.png",
  tutorialAdvanced: "/images/tutorial-advanced-thumb.png",
} as const;

export const TUTORIAL_FILTER_OPTIONS = [
  "All",
  "Framer",
  "Figma",
  "Design",
] as const;

export type TutorialFilterOption = (typeof TUTORIAL_FILTER_OPTIONS)[number];

export const PROJECT_FILTER_OPTIONS = [
  "All",
  "Mobile Application",
  "Website",
  "Smart Watch",
  "Graphic Design",
  "Video Editing",
  "2D Animation",
] as const;

export type ProjectFilterOption = (typeof PROJECT_FILTER_OPTIONS)[number];
