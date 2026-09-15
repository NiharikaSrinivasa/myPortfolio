import type { Config } from 'tailwindcss';
const config:Config={content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./data/**/*.{ts,tsx}'],theme:{extend:{colors:{ink:'#07090d',panel:'#0d1117',line:'#202833',cyanx:'#67e8f9',violetx:'#a78bfa',greenx:'#86efac'},fontFamily:{mono:['var(--font-mono)','monospace']},boxShadow:{glow:'0 0 40px rgba(103,232,249,.08)'}}},plugins:[]};
export default config;
