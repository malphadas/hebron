import { Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"], weights: [400, 500, 600, 700]
});

const roboto_slab = Roboto_Slab({
  subsets: ["latin"], weights: [400]
});

export const metadata = {
  title: "Portifolio Website",
  description: "Matheus's portifolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.className} ${roboto_slab.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
