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
        navy: {
          900: "#0E1A36",
          800: "#16264A",
          700: "#1F3158",
        },
        gold: {
          500: "#D4A24C",
          300: "#E8C079",
        },
        cream: {
          50: "#F5EFE0",
          100: "#FFFFFF",
        },
        teal: {
          500: "#5B8FB5",
          300: "#87B4D1",
        },
        terracotta: {
          // Warm earth tone reserved for Jaribu by Moedim farmer-facing surface.
          500: "#B25E3F",
          300: "#D89479",
        },
        verifiedGreen: {
          // Pairs with gold for the Moedim Verified trust mark.
          500: "#3F8A6E",
          300: "#7AB59B",
        },
        success: "#6FAE76",
        warning: "#D4A24C",
        danger: "#C36B5F",
        // Semantic brand surfaces. Use these in components, not the raw scale.
        brand: {
          moedim: {
            bg: "#0E1A36",
            ink: "#F5EFE0",
            accent: "#D4A24C",
          },
          moedimai: {
            bg: "#16264A",
            ink: "#F5EFE0",
            accent: "#5B8FB5",
          },
          verified: {
            bg: "#FFFFFF",
            ink: "#0E1A36",
            accent: "#3F8A6E",
            mark: "#D4A24C",
          },
          jaribu: {
            bg: "#0E1A36",
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
