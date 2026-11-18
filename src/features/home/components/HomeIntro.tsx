import Image from "next/image";
import { homeContent } from "@/config/home";
import styles from "./HomeIntro.module.css";

export default function HomeIntro() {
  return (
    <section className={styles.intro} aria-labelledby="home-title">
      <div className={styles.content}>
        <p className={styles.location}>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2a7 7 0 0 0-7 7c0 5.1 7 13 7 13s7-7.9 7-13a7 7 0 0 0-7-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          </svg>
          {homeContent.intro.eyebrow}
        </p>
        <h1 id="home-title" className={styles.title}>
          {homeContent.intro.title}
        </h1>
      </div>

      <figure className={styles.visual} aria-hidden="true">
        <Image
          src={homeContent.intro.image}
          alt=""
          fill
          priority
          unoptimized
          sizes="(max-width: 900px) 100vw, 50vw"
          className={styles.photo}
        />
      </figure>
    </section>
  );
}
