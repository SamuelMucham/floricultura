import { Young_Serif, Figtree } from "next/font/google";
import "./globals.css";
const serif = Young_Serif({ subsets: ["latin"], weight: "400", variable: "--serif" });
const sans = Figtree({ subsets: ["latin"], variable: "--sans" });
export const metadata = {
  title: "Art Flores – Floricultura, aviário e cestas de café da manhã",
  description: "Buquês, arranjos, flores, cestas de café da manhã e aviário. Peça pelo WhatsApp e receba em casa.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
