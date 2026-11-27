export type AmenityIconName = "door" | "bed" | "shower" | "tv" | "food" | "info";

const icons: Record<AmenityIconName, React.ReactNode> = {
  door: (
    <>
      <path d="M7 3h10v18H7zM5 21h14" />
      <path d="M14 12h.01" />
    </>
  ),
  bed: (
    <>
      <path d="M3 18V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10M3 14h18M3 18h18v2H3z" />
      <path d="M6 14v-2.500c0-1 1-1.500 2-1.500h3c1 0 1.500.5 1.500 1.500V14M12.500 14v-2.500c0-1 .5-1.500 1.500-1.500h2c1 0 2 .5 2 1.500V14" />
    </>
  ),
  shower: (
    <>
      <path d="M17 21V6a3 3 0 0 0-6 0M9 8l5 0M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01" />
    </>
  ),
  tv: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="12" cy="12" r="5.500" />
      <circle cx="12" cy="12" r="2.500" />
    </>
  ),
  food: (
    <>
      <path d="M6 3v7a2 2 0 0 0 4 0V3M8 3v18M17 21V3c-2 2-3 5-3 8h3" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6M12 7.500h.01" />
    </>
  ),
};

export default function AmenityIcon({ name }: { name: AmenityIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}
