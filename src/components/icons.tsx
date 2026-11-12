import type { ReactNode, SVGProps } from "react";

type IconName = "arrow" | "menu" | "close" | "pin" | "phone" | "instagram" | "chevron" | "calendar" | "home" | "bed" | "sparkles" | "wifi" | "air-conditioner" | "tv" | "minibar" | "bath" | "living-room" | "kettle" | "hair-dryer" | "desk" | "wardrobe" | "area" | "guests" | "view";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

const paths: Record<IconName, ReactNode> = {
  arrow: (
    <>
      <path d="M4.5 12h15" />
      <path d="m13 5.5 6.5 6.5L13 18.5" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 11h18" />
    </>
  ),
  home: (
    <>
      <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" />
    </>
  ),
  bed: (
    <>
      <path d="M3 19v-9M3 16h18v3M21 19v-7a2 2 0 0 0-2-2H8v6" />
      <path d="M3 13h5M8 13v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2" />
    </>
  ),
  sparkles: (
    <>
      <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
      <path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 9.5a11 11 0 0 1 14 0" />
      <path d="M8 12.5a6.5 6.5 0 0 1 8 0" />
      <path d="M10.5 15.5a2.5 2.5 0 0 1 3 0" />
      <circle cx="12" cy="19" r=".8" fill="currentColor" stroke="none" />
    </>
  ),
  "air-conditioner": (
    <>
      <rect x="3" y="5" width="18" height="9" rx="2" />
      <path d="M7 10h10M8 17l-1 2M12 17v3M16 17l1 2" />
    </>
  ),
  tv: (
    <>
      <rect x="3" y="5" width="18" height="13" rx="2" />
      <path d="m8 22 4-4 4 4M12 18v4" />
    </>
  ),
  minibar: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M5 11h14M16 7v1M16 15v2" />
    </>
  ),
  bath: (
    <>
      <path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3ZM4 12V6a3 3 0 0 1 5.8-1" />
      <path d="M7 20v2M17 20v2M8 15h.01M12 15h.01M16 15h.01" />
    </>
  ),
  "living-room": (
    <>
      <path d="M4 12v7M20 12v7M4 15h16v4H4zM6 15V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6" />
    </>
  ),
  kettle: (
    <>
      <path d="M7 9h10v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9ZM17 12h2a2 2 0 0 1 0 4h-2M9 5h6M11 3h2" />
    </>
  ),
  "hair-dryer": (
    <>
      <path d="M3 9a6 6 0 0 1 6-6h5a6 6 0 0 1 0 12h-2l-3 6H6l2-7a6 6 0 0 1-5-5Z" />
      <path d="M14 7h.01M14 9h.01M14 11h.01" />
    </>
  ),
  desk: (
    <>
      <path d="M3 8h18v3H3zM5 11v9M19 11v9M8 8V5h8v3" />
    </>
  ),
  wardrobe: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M12 3v18M9 10v2M15 10v2" />
    </>
  ),
  area: (
    <>
      <path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5M8 8l-5-5M16 8l5-5M8 16l-5 5M16 16l5 5" />
    </>
  ),
  guests: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20v-2a6 6 0 0 1 12 0v2H3ZM17 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v2h-3" />
    </>
  ),
  view: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
    </>
  ),
};

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
