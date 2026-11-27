export type RoomFeatureIconName = "bed" | "view" | "area";

const icons: Record<RoomFeatureIconName, React.ReactNode> = {
  bed: (
    <>
      <rect x="8" y="6" width="44" height="30" rx="1.500" />
      <path d="M8 36h44v8H8zM14 36v-8c0-2 2-4 5-4h9c2 0 3 1 4 2 1-1 2-2 4-2h6c3 0 5 2 5 4v8M12 44v6M48 44v6" />
    </>
  ),
  view: (
    <>
      <rect x="8" y="12" width="20" height="40" rx="1.500" />
      <rect x="28" y="26" width="24" height="26" rx="1.500" />
      <path d="M12 8h12v4M32 22h16v4M13 19h10M13 24h10M13 29h10M13 34h10M32 33h6M42 33h6M32 40h6M42 40h6M16 52v-6h4v6M38 52v-6h4v6" />
    </>
  ),
  area: (
    <>
      <path d="M10 42 42 10l8 8-32 32z" />
      <path d="m16 36 4 4M22 30l3 3M28 24l4 4M34 18l3 3M40 12l3 3" />
    </>
  ),
};

export default function RoomFeatureIcon({ name }: { name: RoomFeatureIconName }) {
  return (
    <svg
      viewBox="0 0 60 60"
      width="60"
      height="60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}
