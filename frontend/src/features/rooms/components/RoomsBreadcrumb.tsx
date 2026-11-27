import Link from "next/link";
import { roomsPageContent } from "@/config/roomsPage";
import styles from "./RoomsBreadcrumb.module.css";

export default function RoomsBreadcrumb({ currentLabel }: { currentLabel?: string }) {
  const { breadcrumb, breadcrumbLabel, href } = roomsPageContent;
  const items = currentLabel
    ? [...breadcrumb.slice(0, -1), { label: "Phòng", href }, { label: currentLabel, href: null }]
    : breadcrumb;

  return (
    <nav className={styles.breadcrumb} aria-label={breadcrumbLabel}>
      <ol>
        {items.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
