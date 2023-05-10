import Link from "next/link";
import "./globals.scss";
import { Inter, Roboto } from "next/font/google";
import localFont from 'next/font/local';
import styles from "./layout.module.scss";
import { Metadata } from "next";

const sans = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const gothic = Roboto({
  weight: '700', 
  subsets: ["latin"], 
  variable: "--font-gothic",
});

const bold = localFont({
  src: "../../public/assets/fonts/HussarBoldWeb-bf92.woff",
  variable: "--font-bold",
});

const brand = localFont({
  src: "../../public/assets/fonts/Adine Kirnberg.ttf",
  variable: "--font-brand",
});

export const metadata: Metadata = {
  title: "Wonderful Items",
  description: "We sell wonderful items!",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [
      {
        // url: "https://nextjs-note-tau.vercel.app/assets/images/og-image.png",
        url: "https://www.lambdatest.com/blog/wp-content/uploads/2021/07/css-animation.jpg",
        width: 800,
        height: 423,
        alt: "Wonderful Items",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${gothic.variable}  ${bold.variable}  ${brand.variable}`}>
      <body>
        <header className={styles.header}>
          <h1 className={styles.brand}><Link href="/">Test Demos</Link></h1>
          <nav className={styles.nav}>
            <Link href="/animations">Animations</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
