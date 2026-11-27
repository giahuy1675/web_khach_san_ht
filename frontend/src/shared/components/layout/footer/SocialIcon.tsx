type SocialIconProps = {
  name: string;
};

const icons: Record<string, React.ReactNode> = {
  facebook: <path d="M14 21v-8h2.600l.4-3H14V8.200c0-.9.300-1.500 1.600-1.500H17V4.100A18 18 0 0 0 15 4c-2.300 0-3.900 1.400-3.900 4V10H8.500v3h2.600v8H14Z" />,
  instagram: (
    <>
      <rect x="3.500" y="3.500" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.200 6.800h.01" />
    </>
  ),
  x: <path d="M4 4l16 16M20 4 4 20" />,
};

export default function SocialIcon({ name }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}
