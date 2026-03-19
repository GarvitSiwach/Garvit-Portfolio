import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  title: "Garvit Siwach",
  description: "Computer Science undergraduate with strong fundamentals in front-end and back-end web development. Skilled in building responsive and user-friendly web applications using HTML, CSS, JavaScript, React.js, Node.js, and MySQL. Experienced in developing real-world projects, integrating APIs, and writing clean, maintainable, and efficient code.",
  keywords: "Garvit Siwach, Full Stack Software Developer, React.js, Node.js, Express.js, JavaScript, HTML, CSS, MySQL, Java, Python, C++, Data Structures, Algorithms, OOP, Portfolio",
  authors: [{ name: "Garvit Siwach" }],
  creator: "Garvit Siwach",
  publisher: "Garvit Siwach",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Garvit Siwach - Full Stack Software Developer",
    description: "Computer Science undergraduate with strong fundamentals in front-end and back-end web development. Skilled in building responsive and user-friendly web applications using HTML, CSS, JavaScript, React.js, Node.js, and MySQL. Experienced in developing real-world projects, integrating APIs, and writing clean, maintainable, and efficient code.",
    url: "https://github.com/GarvitSiwach",
    siteName: "Garvit Siwach",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garvit Siwach - Full Stack Software Developer",
    description: "Computer Science undergraduate with strong fundamentals in front-end and back-end web development. Skilled in building responsive and user-friendly web applications using HTML, CSS, JavaScript, React.js, Node.js, and MySQL. Experienced in developing real-world projects, integrating APIs, and writing clean, maintainable, and efficient code.",
  },
  verification: {
    google: "GsRYY-ivL0F_VKkfs5KAeToliqz0gCrRAJKKmFkAxBA",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} main-container font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={'G-7WD4HM3XRE'}/>
    </html>
  );
}
