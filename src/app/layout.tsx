import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mộc An Boutique Hotel | Chạm vào nhịp sống Hội An",
  description:
    "Một chốn nghỉ nhỏ đầy bình yên giữa lòng Hội An. Khám phá phòng nghỉ, trải nghiệm và những điều thân thương tại Mộc An Boutique Hotel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.variable} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
