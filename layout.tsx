import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Saku Cerdas Studio | Ebook Digital', description: 'Panduan praktis untuk belajar, berkarya, dan bertumbuh.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="id"><body>{children}</body></html>; }
