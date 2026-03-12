import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://noahneri.com"),
  title: "Noah Neri — AI Developer & Builder",
  description:
    "USC Business student shipping AI-powered products fast. Agent orchestration, vibe coding, full-stack development.",
  keywords: [
    "Noah Neri",
    "AI Developer",
    "Agent Orchestration",
    "Vibe Coding",
    "USC",
    "Portfolio",
  ],
  authors: [{ name: "Noah Neri" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noahneri.com",
    siteName: "Noah Neri",
    title: "Noah Neri — AI Developer & Builder",
    description:
      "USC Business student shipping AI-powered products fast. Agent orchestration, vibe coding, full-stack development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noah Neri Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noah Neri — AI Developer & Builder",
    description: "USC Business student shipping AI-powered products fast.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
