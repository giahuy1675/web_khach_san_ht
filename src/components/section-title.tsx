type SectionTitleProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionTitle({
  id,
  eyebrow,
  title,
  description,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`section-title${light ? " section-title--light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
