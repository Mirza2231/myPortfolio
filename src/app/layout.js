import localFont from "next/font/local"; 
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "700", "900"],
  variable: "--font-heading",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body",
  display: "swap",
});


export const metadata = {
  title: "Faraz | Full Stack Developer",
  description: "Portfolio of Faraz, a MERN Stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
     </head>
      <body className={`${montserrat.variable} ${poppins.variable} font-sans antialiased selection:bg-accent selection:text-black`}>
        {children}
      </body>
    </html>
  );
}