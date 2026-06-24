import type { Metadata } from "next";
import { Azeret_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { NavigationProvider } from "@/components/layout/NavigationContext";
import "./globals.css";

const azeretMono = Azeret_Mono({
  variable: "--font-azeret-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Vengat R. | Product Designer",
  description:
    "Portfolio of Vengat R. — Product Designer specializing in UI/UX, Framer, and design systems.",
  openGraph: {
    title: "Vengat R. | Product Designer",
    description: "Product Designer portfolio — projects, stack, tutorials, and contact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={azeretMono.variable}>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <NavigationProvider>{children}</NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
