import type { ServiceIconName } from "@/config/services";

const paths: Record<ServiceIconName, React.ReactNode> = {
  pool: (
    <>
      <path d="M8 15V6.5a2 2 0 0 1 4 0M15 15V6.5a2 2 0 0 1 4 0M8 9.5h7M8 12.5h7" />
      <path d="M2.5 19c1.5 0 1.5-1.2 3-1.2s1.5 1.2 3 1.2 1.5-1.2 3-1.2 1.5 1.2 3 1.2 1.5-1.2 3-1.2 1.5 1.2 3 1.2" />
    </>
  ),
  spa: (
    <>
      <path d="M12 20c-4.2-1-7-4.2-7-9 3.8 0 7 2 7 5.2 0-3.2 3.2-5.2 7-5.2 0 4.800-2.800 8-7 9Z" />
      <path d="M12 16V6.500" />
    </>
  ),
  family: (
    <>
      <circle cx="12" cy="6" r="2.200" />
      <circle cx="5.500" cy="8.500" r="1.800" />
      <circle cx="18.500" cy="8.500" r="1.800" />
      <path d="M8.500 20v-5.500a3.500 3.500 0 0 1 7 0V20M2.500 18v-3a3 3 0 0 1 3-3M21.500 18v-3a3 3 0 0 0-3-3" />
    </>
  ),
  fitness: <path d="M6.500 6.500v11M17.500 6.500v11M3.500 9v6M20.500 9v6M6.500 12h11" />,
  shuttle: (
    <>
      <rect x="4" y="4" width="16" height="13" rx="2.500" />
      <path d="M4 11h16M8 17v2.500M16 17v2.500M7 14h.01M17 14h.01" />
    </>
  ),
  breakfast: (
    <>
      <path d="M4 9.500h12v4.500a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9.500Z" />
      <path d="M16 10.500h1.500a2.500 2.500 0 0 1 0 5H16M8 3.500v3M12 3.500v3" />
    </>
  ),
  wifi: (
    <>
      <path d="M2.500 9a14 14 0 0 1 19 0M5.500 12.500a9.500 9.500 0 0 1 13 0M8.600 16a5 5 0 0 1 6.800 0" />
      <path d="M12 19.500h.01" />
    </>
  ),
  parking: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 17V8h3.200a2.600 2.600 0 0 1 0 5.200H10" />
    </>
  ),
};

export default function ServiceIcon({ name }: { name: ServiceIconName }) {
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
      {paths[name]}
    </svg>
  );
}
