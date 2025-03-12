import type { Metadata } from "next";
import { Klee_One } from 'next/font/google'
import "./globals.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Travel Articles",
  description: "Travel Articles Blog",
};

const klee = Klee_One({ 
  subsets: ['latin'], 
  display: 'swap',
  weight: "400"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const date = new Date();
  return (
    <html lang="en">
      <body className={klee.className}>
        <Header />
        {children}
        <footer className='bg-[#222] text-center text-white p-[10] '>
          <p className="m-0">&copy; All right reserved {date.getFullYear()}</p>
          <p className="m-0" id="contact">@travilly</p>
        </footer> 
      </body>
    </html>
  );
}
