import { Metadata } from "next";
import AIWorkshopContent from "./AIWorkshopContent";

export const metadata: Metadata = {
  title:
    "Free AI Career Guidance Workshop for Rural School Students | JKKN Institutions",
  description:
    "Free AI-powered career guidance workshop for 8th-12th rural school students. Discover your ideal career with AI aptitude tests, hands-on AI tools, and expert mentoring by JKKN Institutions, Komarapalayam.",
  keywords: [
    "JKKN AI workshop",
    "career guidance rural students",
    "AI aptitude test Tamil Nadu",
    "free workshop Namakkal",
    "JKKN career workshop",
    "rural school career guidance",
  ],
};

export default function AIWorkshopPage() {
  return <AIWorkshopContent />;
}
