import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "JKKN Institutions Placement Cell \u2014 Campus Recruitment, Training & Career Support | Namakkal, Tamil Nadu",
  description:
    "JKKN Institutions Placement Cell offers 95% placement support across 6 colleges \u2014 Dental, Engineering, Pharmacy, Nursing, Arts and Science, Allied Health Sciences. 500+ recruiters, \u20B912 LPA highest package.",
  keywords:
    "JKKN placements, JKKN placement cell, JKKN campus recruitment, best placement college Namakkal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
