import { Geist, Geist_Mono, Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import FooterInner from "@/components/footer-inner";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const kumbh = Kumbh_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // pick weights you want
  variable: '--font-kumbh',
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kelly",
  description: "Human Resources Consultation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kumbh.variable} antialiased`}
      >
      <Header />
        {children}
        <Footer />
        <FooterInner />
      </body>
    </html>
  );
}
