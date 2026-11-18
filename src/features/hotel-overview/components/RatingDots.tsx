import styles from "./RatingDots.module.css";

type RatingDotsProps = {
  score: number;
  maxScore: number;
};

export default function RatingDots({ score, maxScore }: RatingDotsProps) {
  return (
    <div
      className={styles.dots}
      role="img"
      aria-label={`${score}/${maxScore}`}
    >
      {Array.from({ length: maxScore }).map((_, index) => {
        const fill = Math.round(Math.min(Math.max(score - index, 0), 1) * 100);

        return (
          <span
            key={index}
            className={styles.dot}
            style={{ "--fill": `${fill}%` } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
}
