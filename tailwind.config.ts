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
        "background-image-1":'linear-gradient(to left, #2ae1a9 30%,#7CDF6B)',
      },
      colors: {
        "pri-grad-1": "#538EB8",
        "pri-grad-2": "#7CDF6B",
        "gray-1":"#F7F7F7",
        "gray-2":"#8D8D8D",
        pri: "#2ae1a9",
        

      },
    },
  },
  plugins: [],
};
export default config;
