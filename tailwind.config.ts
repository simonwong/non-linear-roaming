import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      "@theme": {
        "--font-family-sans": ["var(--font-geist-sans)"],
        "--font-family-mono": ["var(--font-geist-mono)"],
        "--radius": "0.5rem",
        "--border": "240 5.9% 90%",
        "--input": "240 5.9% 90%",
        "--ring": "240 5.9% 90%",
        "--background": "0 0% 100%",
        "--foreground": "240 10% 3.9%",
        "--primary": "240 5.9% 10%",
        "--primary-foreground": "0 0% 98%",
        "--secondary": "240 4.8% 95.9%",
        "--secondary-foreground": "240 5.9% 10%",
        "--destructive": "0 84.2% 60.2%",
        "--destructive-foreground": "0 0% 98%",
        "--muted": "240 4.8% 95.9%",
        "--muted-foreground": "240 3.8% 46.1%",
        "--accent": "240 4.8% 95.9%",
        "--accent-foreground": "240 5.9% 10%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "240 10% 3.9%",
        "--card": "0 0% 100%",
        "--card-foreground": "240 10% 3.9%"
      }
    },
  },
  plugins: [],
} satisfies Config;

export default config; 