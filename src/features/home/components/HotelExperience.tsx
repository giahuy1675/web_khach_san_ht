"use client";

import Image from "next/image";
import { useState } from "react";
import { homeContent } from "@/config/home";
import styles from "./HotelExperience.module.css";

const galleryImages = [
  "/images/mega-menu/stay.jpg",
  "/images/mega-menu/dining.jpg",
  "/images/mega-menu/ha-tien.jpg",
  "/images/mega-menu/explore.jpg",
];

const services = [
  { title: "Bữa sáng", text: "Hương vị bắt đầu ngày mới" },
  { title: "Hồ bơi", text: "Thư giãn giữa không gian xanh" },
  { title: "Đón tiễn", text: "Tiện nghi di chuyển suốt hành trình" },
  { title: "Wi-Fi", text: "Kết nối nhanh trong toàn khách sạn" },
];

const activities = [
  { title: "Núi Đá Dựng", text: "Khám phá thiên nhiên xung quanh Hà Tiên", image: "/images/mega-menu/ha-tien.jpg" },
  { title: "Thành phố ven sông", text: "Đi dạo quanh trung tâm ven biển", image: "/images/mega-menu/explore.jpg" },
];

export default function HotelExperience() {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const galleryLead = galleryImages[galleryIndex];
  const gallerySide = galleryImages[(galleryIndex + 1) % galleryImages.length];

  return (
    <>
      <section id="am-thuc" className={styles.dining} aria-labelledby="dining-title">
        <figure className={styles.diningImage}>
          <Image src="/images/mega-menu/dining.jpg" alt="Không gian ẩm thực" fill unoptimized sizes="50vw" />
        </figure>
        <div className={styles.diningContent}>
          <p className={styles.eyebrow}>{homeContent.dining.eyebrow}</p>
          <h2 id="dining-title">{homeContent.dining.title}</h2>
          <p>{homeContent.dining.description}</p>
          <a href="#lien-he">Xem nhà hàng</a>
        </div>
      </section>

      <section id="thu-vien-anh" className={styles.gallerySection} aria-labelledby="gallery-title">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>{homeContent.gallery.eyebrow}</p>
            <h2 id="gallery-title">{homeContent.gallery.title}</h2>
          </div>
          <a href="#thu-vien-anh">Xem tất cả hình ảnh</a>
        </div>
        <div className={styles.featuredGallery}>
          <figure className={styles.featuredLead}>
            <Image src={galleryLead} alt={`Không gian River Hotel ${galleryIndex + 1}`} fill unoptimized sizes="(max-width: 900px) 75vw, 75vw" />
            <a className={styles.viewGallery} href="#thu-vien-anh">Xem thư viện</a>
          </figure>
          <button
            className={styles.featuredSide}
            type="button"
            aria-label="Xem ảnh tiếp theo"
            onClick={() => setGalleryIndex((galleryIndex + 1) % galleryImages.length)}
          >
            <Image src={gallerySide} alt="" fill unoptimized sizes="25vw" />
          </button>
          <div className={styles.galleryDots} aria-label="Chọn ảnh nổi bật">
            {galleryImages.map((image, index) => (
              <button
                key={image}
                type="button"
                className={index === galleryIndex ? styles.galleryDotActive : styles.galleryDot}
                aria-label={`Hiển thị ảnh ${index + 1}`}
                aria-current={index === galleryIndex ? "true" : undefined}
                onClick={() => setGalleryIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="dich-vu" className={styles.servicesSection} aria-labelledby="services-title">
        <p className={styles.eyebrow}>{homeContent.services.eyebrow}</p>
        <h2 id="services-title">{homeContent.services.title}</h2>
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article key={service.title}>
              <span aria-hidden="true">◇</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="hoat-dong" className={styles.activitiesSection} aria-labelledby="activities-title">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>{homeContent.activities.eyebrow}</p>
            <h2 id="activities-title">{homeContent.activities.title}</h2>
          </div>
        </div>
        <div className={styles.activityGrid}>
          {activities.map((activity) => (
            <article key={activity.title}>
              <figure>
                <Image src={activity.image} alt="" fill unoptimized sizes="(max-width: 900px) 100vw, 50vw" />
              </figure>
              <h3>{activity.title}</h3>
              <p>{activity.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
