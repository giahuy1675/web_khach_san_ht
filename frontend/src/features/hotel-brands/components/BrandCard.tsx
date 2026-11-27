import Image from "next/image";
import { brandsShowcaseContent } from "@/config/brandsShowcase";
import styles from "./BrandCard.module.css";

type Brand = (typeof brandsShowcaseContent.brands)[number];

type BrandCardProps = {
  brand: Brand;
  tierLabel: string | null;
};

export default function BrandCard({ brand, tierLabel }: BrandCardProps) {
  return (
    <li className={styles.item}>
      <p className={styles.tier}>{tierLabel}</p>
      <a className={styles.card} href={brand.href}>
        <span className={styles.logo}>
          <span className={styles.name}>{brand.name}</span>
          <span className={styles.caption}>{brand.caption}</span>
        </span>
        <span className={styles.media}>
          <Image src={brand.image} alt="" fill quality={100} sizes="182px" />
        </span>
        <span className={styles.tagline}>{brand.tagline}</span>
        <span className={styles.dot} style={{ backgroundColor: brand.dotColor }} />
      </a>
    </li>
  );
}
