import type { ComponentProps } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { RoomDetailGallery } from "@/components/room-detail-gallery";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { hotel, rooms } from "@/data/hotel";

type RoomPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return rooms.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((item) => item.slug === slug);

  return {
    title: room ? `${room.name} | ${hotel.fullName}` : `Phòng nghỉ | ${hotel.fullName}`,
    description: room?.description ?? `Thông tin chi tiết phòng nghỉ tại ${hotel.fullName}.`,
  };
}

export default async function RoomPage({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = rooms.find((item) => item.slug === slug);

  if (!room) notFound();

  const view = room.name.includes("Sea View")
    ? "Hướng biển"
    : room.name.includes("City View")
      ? "Hướng thành phố"
      : room.name.includes("River View")
        ? "Hướng sông"
        : "Liên hệ khách sạn";
  const amenities = room.sampleDetailAmenities;
  const otherRooms = rooms.filter((item) => item.slug !== room.slug).slice(0, 3);
  const roomIndex = rooms.findIndex((item) => item.slug === room.slug);
  const amenityIcons: Record<string, ComponentProps<typeof Icon>["name"]> = {
    "Wi-Fi miễn phí": "wifi",
    "Điều hòa": "air-conditioner",
    "TV màn hình phẳng": "tv",
    Minibar: "minibar",
    "Phòng tắm riêng": "bath",
    "Phòng khách riêng": "living-room",
    "Khu vực tiếp khách": "living-room",
    "Ấm đun nước": "kettle",
    "Máy sấy tóc": "hair-dryer",
    "Bàn làm việc": "desk",
    "Tủ quần áo": "wardrobe",
  };
  const galleryRooms = [
    room,
    ...rooms.slice(roomIndex + 1).concat(rooms.slice(0, roomIndex)).slice(0, 4),
  ];

  return (
    <>
      <SiteHeader isHomePage={false} />
      <main className="room-detail">
        <nav aria-label="Điều hướng trang" className="room-detail__breadcrumb">
          <Link href="/">Trang chủ</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#rooms">Phòng</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{room.name}</span>
        </nav>

        <section aria-label={`Hình ảnh ${room.name}`} className="room-detail__hero">
          <RoomDetailGallery
            items={galleryRooms.map((galleryRoom) => ({
              ...galleryRoom,
              isCurrentRoom: galleryRoom.slug === room.slug,
            }))}
            roomName={room.name}
          />
          <p className="room-detail__gallery-note">
            Ảnh lớn là phòng đang xem; các ảnh nhỏ là hình tham khảo của những hạng phòng khác.
          </p>
        </section>
        <section aria-labelledby="room-detail-title" className="room-detail__panel">
          <div className="room-detail__overview">
            <div className="room-detail__intro">
              <span className="eyebrow">THÔNG TIN PHÒNG · DỮ LIỆU MINH HỌA</span>
              <h1 id="room-detail-title">{room.name}</h1>
              <p className="room-detail__description">{room.description}</p>
            </div>
            <dl className="room-detail__specs">
              <div><Icon name="area" /><span><dt>Diện tích</dt><dd>{room.sampleSize}</dd></span></div>
              <div><Icon name="guests" /><span><dt>Sức chứa</dt><dd>{room.sampleGuests}</dd></span></div>
              <div><Icon name="bed" /><span><dt>Giường</dt><dd>{room.sampleBed}</dd></span></div>
              <div><Icon name="view" /><span><dt>Tầm nhìn</dt><dd>{view}</dd></span></div>
            </dl>
          </div>
          <div className="room-detail__lower">
            <div className="room-detail__amenities">
              <h2>Tiện nghi trong phòng</h2>
              <ul>
                {amenities.map((amenity) => (
                  <li key={amenity}>
                    <Icon name={amenityIcons[amenity] ?? "sparkles"} />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="room-detail__booking">
              <div>
                <span>Giá minh họa / đêm</span>
                <strong>{room.samplePrice}</strong>
              </div>
              <a className="button button--primary" href={`tel:${hotel.phone.replaceAll(" ", "")}`}>
                <Icon name="phone" /> Gọi đặt phòng
              </a>
            </div>
          </div>
          <p className="room-detail__notice">
            Toàn bộ giá và tiện nghi ở trên là dữ liệu minh họa, vui lòng liên hệ khách sạn để xác nhận trước khi đặt.
          </p>
        </section>

        <section aria-labelledby="other-rooms-title" className="room-detail__more">
          <div className="room-detail__more-heading">
            <div>
              <span className="eyebrow">TÌM THÊM KHÔNG GIAN PHÙ HỢP</span>
              <h2 id="other-rooms-title">Có thể bạn cũng thích</h2>
            </div>
            <Link className="text-link" href="/#rooms">Tất cả phòng <Icon name="arrow" /></Link>
          </div>
          <div className="room-detail__related">
            {otherRooms.map((otherRoom) => (
              <Link className="room-detail__related-card" href={`/rooms/${otherRoom.slug}`} key={otherRoom.slug}>
                <span className="room-detail__related-image">
                  <Image alt="" fill sizes="(max-width: 760px) 80vw, 30vw" src={otherRoom.image} />
                </span>
                <span className="room-detail__related-copy">
                  <strong>{otherRoom.name}</strong>
                  <span>{otherRoom.sampleSize} <span aria-hidden="true">·</span> {otherRoom.sampleGuests}</span>
                </span>
                <Icon name="arrow" />
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter isHomePage={false} />
    </>
  );
}
