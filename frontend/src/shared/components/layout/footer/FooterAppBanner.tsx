import Image from "next/image";
import { footerContent } from "@/config/footer";
import styles from "./FooterAppBanner.module.css";

export default function FooterAppBanner() {
  const { title, buttonLabel, buttonHref, phoneTitle, phoneImage } = footerContent.app;

  return (
    <section className={styles.banner} aria-label="Ứng dụng di động">
      <div className={styles.text}>
        <p>{title}</p>
        <a className={styles.button} href={buttonHref}>
          {buttonLabel}
        </a>
      </div>

      <div className={styles.phone} aria-hidden="true">
        <span className={styles.notch} />
        <span className={styles.phoneBar}>{phoneTitle}</span>
        <div className={styles.screen}>
          <Image src={phoneImage} alt="" fill sizes="270px" />
        </div>
      </div>
    </section>
  );
}
