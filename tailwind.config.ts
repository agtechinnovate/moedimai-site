import type { Config } from "tailwindcss";

/**
 * Moedim / MoedimAI design tokens.
 *
 * Brand architecture (V3 §1):
 *   - Moedim          consumer/product brand (storefront, retail emails)
 *   - MoedimAI        verification + B2B platform (buyers, portal, investors)
 *   - Moedim Verified trust mark on lots, COAs, evidence packets
 *   - Jaribu by Moedim farmer recruitment surface
 *
 * Tokens are semantic + role-based. Apply `brand.*` classes to keep
 * audience and surface intent in the markup, not in raw colour hex.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        // Brand palette aligned with the MoedimAI deck and demo.
        navy: {
          900: "#0A0D13",
          800: "#0E121B",
          700: "#121826",
        },
        gold: {
          500: "#C9A961",
          300: "#E0C588",
        },
        cream: {
          50: "#F5EFE0",
          100: "#FFFFFF",
        },
        teal: {
          500: "#1C7293",
          300: "#5B8FB5",
        },
        terracotta: {
          500: "#B25E3F",
          300: "#D89479",
        },
        verifiedGreen: {
          500: "#3F8A6E",
          300: "#7AB59B",
        },
        success: "#6FAE76",
        warning: "#C9A961",
        danger: "#C36B5F",
        brand: {
          moedimai: {
            bg: "#0A1A3A",
            ink: "#F5EFE0",
            accent: "#C9A961",
          },
          verified: {
            bg: "#FFFFFF",
            ink: "#0A1A3A",
            accent: "#3F8A6E",
            mark: "#C9A961",
          },
          jaribu: {
            bg: "#0A1A3A",
            ink: "#F5EFE0",
            accent: "#B25E3F",
          },
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
