import Image from "next/image";
import { homeContent } from "@/config/home";
import styles from "./HeroFeaturedRoom.module.css";

export default function HeroFeaturedRoom() {
  const { title, description, image, href, linkLabel } = homeContent.intro.featured;

  return (
    <a className={styles.featured} href={href} aria-label={linkLabel}>
      <span className={styles.media}>
        <Image src={image} alt="" fill quality={100} sizes="96px" className={styles.photo} />
      </span>
      <span className={styles.body}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
        <svg className={styles.arrow} viewBox="0 0 30 12" aria-hidden="true">
          <path d="M0 6h28M23 1l5 5-5 5" />
        </svg>
      </span>
    </a>
  );
}
