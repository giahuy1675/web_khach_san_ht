import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { hotel } from "@/data/hotel";

type RoomCardProps = {
  slug: string;
  name: string;
  description: string;
  image: string;
  samplePrice: string;
  sampleSize: string;
  sampleGuests: string;
  sampleBed: string;
  sampleAmenities: string;
};

export function RoomCard({
  slug,
  name,
  description,
  image,
  samplePrice,
  sampleSize,
  sampleGuests,
  sampleBed,
  sampleAmenities,
}: RoomCardProps) {
  const detailHref = `/rooms/${slug}`;
  const view = name.includes("Sea View")
    ? "Hướng biển"
    : name.includes("City View")
      ? "Hướng thành phố"
      : name.includes("River View")
        ? "Hướng sông"
        : null;

  return (
    <article className="room-card">
      <Link aria-label={`Xem chi tiết ${name}`} className="room-card__image-link" href={detailHref}>
        {image ? (
          <Image alt={name} className="room-card__image" fill sizes="(max-width: 720px) 84vw, (max-width: 1100px) 45vw, 30vw" src={image} />
        ) : (
          <span aria-hidden="true" className="image-placeholder">Ảnh phòng sẽ được cập nhật</span>
        )}
        <span className="room-card__arrow" aria-hidden="true">↗</span>
      </Link>
      <div className="room-card__content">
        <div className="room-card__heading">
          <h3><Link href={detailHref}>{name}</Link></h3>
        </div>
        <p>{description}</p>
        <div className="room-card__details">
          <strong className="room-card__price">
            {samplePrice} <span>/ đêm · giá mẫu</span>
          </strong>
          {view ? (
            <span className="room-card__view">
              <Icon name="pin" />
              {view}
            </span>
          ) : null}
          <div className="room-card__specs">
            <span>{sampleSize}</span>
            <span>{sampleGuests}</span>
            <span>{sampleBed}</span>
          </div>
          <span className="room-card__amenities">{sampleAmenities}</span>
          <Link className="room-card__detail-link" href={detailHref}>
            Xem chi tiết phòng <Icon name="arrow" />
          </Link>
          <a href={`tel:${hotel.phone.replaceAll(" ", "")}`}>
            <Icon name="phone" />
            Hỏi giá & chi tiết
          </a>
        </div>
      </div>
    </article>
  );
}
