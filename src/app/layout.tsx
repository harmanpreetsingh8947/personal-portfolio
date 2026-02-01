import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harmanpreet Singh | Full Stack Developer",
  description: "Full Stack Developer with expertise in Python, AWS, React and Next.js, delivering scalable and efficient web applications. Skilled in both front-end and back-end development, cloud integration, and optimizing user experiences.",
  keywords: ["Harmanpreet Singh", "Full Stack Developer", "Python", "React", "Next.js", "TypeScript", "AWS", "FastAPI", "Golang"],
  authors: [{ name: "Harmanpreet Singh" }],
  openGraph: {
    title: "Harmanpreet Singh | Full Stack Developer",
    description: "Full Stack Developer with expertise in Python, AWS, React and Next.js, delivering scalable and efficient web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harmanpreet Singh | Full Stack Developer",
    description: "Full Stack Developer with expertise in Python, AWS, React and Next.js, delivering scalable and efficient web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
