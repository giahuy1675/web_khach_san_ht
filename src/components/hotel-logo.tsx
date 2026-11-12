import Image from "next/image";
import { publicAssetPath } from "@/lib/public-asset";

type HotelLogoProps = {
  footer?: boolean;
};

export function HotelLogo({ footer = false }: HotelLogoProps) {
  return (
    <Image
      alt=""
      className={`brand__logo${footer ? " brand__logo--footer" : ""}`}
      height={150}
      priority={!footer}
      src={publicAssetPath("/images/riverht-logo.png")}
      width={150}
    />
  );
}
