import { footerContent } from "@/config/footer";
import { siteConfig } from "@/config/site";
import FooterNewsletter from "./FooterNewsletter";
import SocialIcon from "./SocialIcon";
import styles from "./FooterContactColumn.module.css";

export default function FooterContactColumn() {
  const { contactTitle, socialTitle, socials } = footerContent;
  const { phone } = siteConfig.footer;

  return (
    <div className={styles.column}>
      <section>
        <h2 className={styles.title}>{contactTitle}</h2>
        <a className={styles.phone} href={`tel:${phone.replace(/\s/g, "")}`}>
          {phone}
        </a>
      </section>

      <section>
        <h2 className={styles.label}>{socialTitle}</h2>
        <ul className={styles.socials}>
          {socials.map((social) => (
            <li key={social.id}>
              <a href={social.href} aria-label={social.label} target="_blank" rel="noreferrer">
                <SocialIcon name={social.id} />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <FooterNewsletter />
    </div>
  );
}
