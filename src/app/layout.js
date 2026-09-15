import 'bootstrap/dist/css/bootstrap.min.css';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from './Header';
import Footer from './Footer';
import Script from 'next/script';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
export const metadata = {
  title: {
    default: "Whopping SEO",
    template: "%s | Whopping SEO",
  },
  description: "Whopping SEO",
};
export default function RootLayout({ children }) {

   const GA_ID = "G-L8367K40QJ";

  return (
<html
  lang="en"
  className={`${geistSans.variable} ${poppins.variable} ${geistMono.variable} h-full antialiased`}
>

 <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="0AI2E5m41AHMErg_o5uVPPHz_Z_DDBbzuD8aYWaM1us"
        />
      </head>

      <body className="min-h-full flex flex-col">
       <Header></Header> 
        {children}
        <Footer>  </Footer>
         {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        </body>
    </html>
  );
}
