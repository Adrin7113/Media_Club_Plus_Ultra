import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-intro": "url('/bg/hero-bg.webp')",
        "grad-redish": "url('/bg/gradRedish.png')",
        "grad-redish1": "url('/bg/gradRedish1.png')",
        oppor: "url('/bg/oppor.png')",
        footerLanding: "url('/img/footerLanding.png')",
      },
    },
  },
  plugins: [],
};
export default config;
