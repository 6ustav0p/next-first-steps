import type { Metadata } from "next";

export const metadata:Metadata= {
 title: 'About Title',
 description: 'SEO Description',
 keywords: ['About Page', 'Gustavo', 'Next.js'],
};

export default function AboutPage() {
  return (
      <span className="font-bold text-7xl">About Page</span>
  );
}