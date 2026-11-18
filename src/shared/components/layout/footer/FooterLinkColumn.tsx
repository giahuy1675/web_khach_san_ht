import styles from "./FooterLinkColumn.module.css";

type FooterSection = {
  title: string;
  links: readonly { label: string; href: string }[];
};

export default function FooterLinkColumn({ sections }: { sections: readonly FooterSection[] }) {
  return (
    <div className={styles.column}>
      {sections.map((section) => (
        <section key={section.title} className={styles.section}>
          <h2 className={styles.title}>{section.title}</h2>
          <ul className={styles.list}>
            {section.links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
