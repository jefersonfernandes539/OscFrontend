import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary, #ffc449)",
          static: "#ffc449",
          foreground: "var(--color-primary-foreground, #000000)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary, #ffc449)",
          static: "#ffc449",
          foreground: "var(--color-secondary-foreground, #000000)",
        },
        background: "var(--color-background, #ffffff)",
        foreground: "var(--color-foreground, #000000)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        destructive: "var(--color-destructive)",
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
        card: "var(--color-card)",
        "card-foreground": "var(--color-card-foreground)",
        sidebar: "var(--color-sidebar)",
        "sidebar-foreground": "var(--color-sidebar-foreground)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
    },
  },
  plugins: [scrollbarHide],
};

export default config;
