import type { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Contact Title',
    description: 'SEO Description',
    keywords: ['Phone', 'Mail', 'Next.js'],
   };

export default function ContactPage() {
    return (
        <>
        <span className="font-bold text-7xl">Contact Page</span>
        </>
    );
    }   