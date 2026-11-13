import Image from "next/image";
import { BookingForm } from "@/components/booking-form";
import { Icon } from "@/components/icons";
import { RoomCarousel } from "@/components/room-carousel";
import { SectionTitle } from "@/components/section-title";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { experiences, hotel } from "@/data/hotel";
import { publicAssetPath } from "@/lib/public-asset";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section aria-labelledby="hero-title" className="hero" id="home">
          <iframe
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            className="hero__video"
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.youtube-nocookie.com/embed/4jzDOqu9CVs?autoplay=1&mute=1&controls=0&loop=1&playlist=4jzDOqu9CVs&playsinline=1&rel=0"
            title="Video giới thiệu khách sạn"
          />
          <div className="hero__shade" />
          <div className="hero__content">
            <span className="eyebrow eyebrow--light">ĐIỂM DỪNG CHÂN GIỮA LÒNG HÀ TIÊN</span>
            <h1 id="hero-title">
              Chạm vào
              <br />
              <em>nhịp sống</em> an yên.
            </h1>
            <p>Tìm khoảng nghỉ dễ chịu, khám phá thành phố biển Hà Tiên theo cách của riêng bạn.</p>
            <a className="button button--light" href="#about">
              Khám phá River Hotel <Icon name="arrow" />
            </a>
          </div>
          <div className="hero__caption">
            <Icon name="pin" />
            <span>{hotel.location}</span>
          </div>
          <a aria-label="Cuộn xuống để khám phá" className="hero__scroll" href="#about">
            <span>CUỘN ĐỂ KHÁM PHÁ</span>
            <span aria-hidden="true" className="hero__scroll-line" />
          </a>
        </section>

        <section aria-label="Tìm phòng" className="booking-wrap" id="booking">
          <div className="booking-intro">
            <span className="eyebrow">KỲ NGHỈ CỦA BẠN</span>
            <p>Bắt đầu từ đây</p>
          </div>
          <BookingForm />
        </section>

        <section aria-labelledby="about-title" className="about section-pad" id="about">
          <div className="about__image-wrap">
            <Image
              alt="River Hotel tại Hà Tiên"
              className="about__image"
              fill
              sizes="(max-width: 760px) 90vw, 42vw"
              src={publicAssetPath("/images/toan-canh-3.webp")}
            />
            <div className="about__stamp">
              <span>Ở đây,</span>
              <strong>ngày chậm<br />lại một chút.</strong>
            </div>
          </div>
          <div className="about__content">
            <span className="eyebrow">CÂU CHUYỆN RIVER HOTEL</span>
            <h2 id="about-title">
              Kỳ nghỉ thư thái
              <br />
              <em>giữa lòng Hà Tiên.</em>
            </h2>
            <p>
              Tọa lạc tại Hà Tiên, River Hotel là điểm dừng chân thuận tiện để nghỉ ngơi,
              thưởng thức ẩm thực và khám phá thành phố biển cùng vùng biển Tây Nam.
              Chúng tôi mong muốn mang đến không gian thoải mái và sự đón tiếp chu đáo
              cho mỗi hành trình.
            </p>
            <a className="text-link" href="#experiences">
              Tìm hiểu câu chuyện <Icon name="arrow" />
            </a>
            <div className="about__facts">
              <div><strong>HÀ TIÊN</strong><span>thành phố biển<br />miền Tây Nam</span></div>
              <div><strong>PHÒNG</strong><span>nhiều lựa chọn<br />cho chuyến đi</span></div>
              <div><strong>ẨM THỰC</strong><span>hương vị địa phương<br />đang chờ bạn</span></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="rooms-title" className="rooms section-pad" id="rooms">
          <h2 className="rooms__title" id="rooms-title">Phòng nghỉ</h2>
          <RoomCarousel />
        </section>

        <section aria-labelledby="restaurant-title" className="restaurant section-pad" id="restaurant">
          <div className="restaurant__content">
            <span className="eyebrow">ĐA DẠNG CÁC MÓN ĂN</span>
            <h2 id="restaurant-title">Nhà hàng</h2>
            <p>Luôn sẵn sàng phục vụ thực khách.</p>
            <div className="restaurant__hours">
              <span>Giờ mở cửa</span>
              <strong>7:00am – 8:00pm</strong>
            </div>
          </div>
          <div className="restaurant__photos">
            <figure className="restaurant__photo restaurant__photo--buffet">
              <Image
                alt="Không gian nhà hàng phục vụ buffet"
                className="restaurant__image"
                fill
                sizes="(max-width: 760px) 42vw, 24vw"
                src={publicAssetPath("/images/bufer-sang.webp")}
              />
            </figure>
            <figure className="restaurant__photo restaurant__photo--dining">
              <Image
                alt="Các món ăn được chuẩn bị tại nhà hàng"
                className="restaurant__image"
                fill
                sizes="(max-width: 760px) 42vw, 24vw"
                src={publicAssetPath("/images/nha-hang.webp")}
              />
            </figure>
          </div>
        </section>

        <section aria-labelledby="quote-title" className="quote-band">
          <span aria-hidden="true" className="quote-band__mark">“</span>
          <p id="quote-title">
            Có những chuyến đi không cần đi thật xa,
            <br />
            chỉ cần tìm đúng nơi để <em>lòng mình nghỉ ngơi.</em>
          </p>
          <span className="quote-band__caption">RIVER HOTEL · HÀ TIÊN</span>
        </section>

        <section aria-labelledby="experiences-title" className="experiences section-pad" id="experiences">
          <SectionTitle
            id="experiences-title"
            description="Những khoảnh khắc nhỏ góp thành một kỳ nghỉ thật trọn vẹn."
            eyebrow="SỐNG TRỌN TỪNG KHOẢNH KHẮC"
            title="Hà Tiên, theo nhịp của bạn."
          />
          <div className="experience-grid">
            {experiences.map((experience) => (
              <article className="experience-card" key={experience.number}>
                <div className="experience-card__image-wrap">
                  {experience.image ? (
                    <Image alt="" className="experience-card__image" fill sizes="(max-width: 720px) 90vw, 33vw" src={experience.image} />
                  ) : (
                    <span aria-hidden="true" className="image-placeholder">Ảnh trải nghiệm sẽ được cập nhật</span>
                  )}
                  <span className="experience-card__number">{experience.number}</span>
                </div>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="shop-title" className="shop section-pad" id="shop">
          <SectionTitle
            eyebrow="SHOP RIVER HOTEL"
            id="shop-title"
            title="Shop River Hotel"
          />
          <p className="shop__message">Không gian mua sắm của River Hotel đang được phát triển. Hẹn gặp bạn sớm.</p>
        </section>

        <section aria-labelledby="location-title" className="location section-pad" id="location">
          <div className="location__content">
            <span className="eyebrow">TÌM ĐƯỜNG ĐẾN RIVER HOTEL</span>
            <h2 id="location-title">Bên dòng Giang Thành.<br /><em>Giữa lòng Hà Tiên.</em></h2>
            <p>River Hotel tọa lạc tại trung tâm Hà Tiên, thuận tiện để bạn khám phá thành phố và vùng biển Tây Nam.</p>
            <div className="location__address">
              <Icon name="pin" />
              <span>{hotel.address}</span>
            </div>
            <a
              className="text-link"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.coordinates)}`}
              rel="noreferrer"
              target="_blank"
            >
              Xem chỉ đường <Icon name="arrow" />
            </a>
          </div>
          <div className="location__image-wrap">
            <iframe
              allowFullScreen
              className="location__map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(hotel.coordinates)}&z=16&output=embed`}
              title="Bản đồ vị trí River Hotel tại Hà Tiên"
            />
            <a
              className="location__image-caption"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.coordinates)}`}
              rel="noreferrer"
              target="_blank"
            >
              HÀ TIÊN · AN GIANG <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section aria-labelledby="closing-title" className="closing">
          <Image
            alt=""
            className="closing__image"
            fill
            sizes="100vw"
            src={publicAssetPath("/images/DELUXE-DOUBLE-SEA-VIEW-1-770x550.png")}
          />
          <div className="closing__shade" />
          <div className="closing__content">
            <span className="eyebrow eyebrow--light">RIVER HOTEL ĐANG CHỜ BẠN</span>
            <h2 id="closing-title">Hẹn bạn ở<br /><em>Hà Tiên nhé.</em></h2>
            <a className="button button--light" href="#booking">
              Lên kế hoạch nghỉ dưỡng <Icon name="arrow" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
