import type { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Pricing Title',
    description: 'Descripcion de los precios',
    keywords: ['precios', 'Gustavo', 'Next.js'],
   };

export default function PricingPage() {
    return (
        <>
        <span className="font-bold text-7xl">Pricing Page</span>
        </>
    );
    }