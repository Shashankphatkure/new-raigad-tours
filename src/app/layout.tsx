import type { Metadata } from "next";
import { Caveat, Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

/**
 * A dedicated, non-variable italic instance for accent words (e.g. the
 * "Luxury"-style flourish in a headline). The variable Cormorant Garamond
 * above only ships upright glyphs, so `italic` on it would be a synthetic
 * browser slant rather than the font's real italic outlines.
 */
const cormorantItalic = Cormorant_Garamond({
  variable: "--font-cormorant-italic",
  subsets: ["latin"],
  weight: "500",
  style: "italic",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raigad Tours",
  description: "Educational and heritage travel across the Sahyadris.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cormorantItalic.variable} ${manrope.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
