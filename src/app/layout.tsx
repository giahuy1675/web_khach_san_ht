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
  title: "River Hotel Hà Tiên | Nghỉ dưỡng giữa lòng Hà Tiên",
  description:
    "River Hotel Hà Tiên là điểm dừng chân để nghỉ ngơi, thưởng thức ẩm thực và khám phá thành phố biển Hà Tiên.",
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
