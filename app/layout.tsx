import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  // Resolves relative canonical and Open Graph URLs set by each page.
  metadataBase: new URL("https://placements.jkkn.ac.in"),
  title: "JKKN Placement Cell | Campus Placements, Namakkal",
  description:
    "JKKN Institutions Placement Cell: campus placements and career training for six colleges in Komarapalayam, near Erode, with 500+ recruiters.",
  keywords:
    "JKKN placements, JKKN placement cell, JKKN campus recruitment, best placement college Namakkal",
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      {/* Browser extensions (e.g. ColorZilla's cz-shortcut-listen) inject body attributes before hydration. */}
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
