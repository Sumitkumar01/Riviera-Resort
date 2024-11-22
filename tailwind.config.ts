import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#063333",
        secondary: "#D1BA97",
        "text-light": "#54647B",
      },
      fontSize: {
        "6xl": ["3.875rem", "4.375rem"],
        "3xl": ["2rem", "2.5rem"],
        "2xl": ["1.5rem", "1.875rem"],
        md: ["1rem", "1.65rem"],
        sm: ["0.875rem", "1.25rem"],
      },
    },
  },
  plugins: [],
};
export default config;
