import type { Metadata } from 'next';import './globals.css';
export const metadata:Metadata={title:'Niharika Srinivas | Senior Frontend Engineer',description:'Portfolio of Niharika Srinivas — React, TypeScript, Next.js and full-stack development.',keywords:['Niharika Srinivas','React Developer','Frontend Engineer','TypeScript','Next.js','Full Stack Developer']};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
