"use client";

import { useEffect, useRef, useState } from "react";
import UseAnimations from "react-useanimations";
import arrowRight from "react-useanimations/lib/arrowRight";
import menu3 from "react-useanimations/lib/menu3";
import { HotelLogo } from "@/components/hotel-logo";
import { Icon } from "@/components/icons";
import { hotel } from "@/data/hotel";

const links = [
  { href: "#home", label: "Trang chủ", hasDropdown: false },
  { href: "#rooms", label: "Phòng", hasDropdown: false },
  { href: "#restaurant", label: "Nhà hàng", hasDropdown: false },
  { href: "#experiences", label: "Dịch vụ", hasDropdown: true },
  { href: "#location", label: "Vị trí", hasDropdown: false },
];

const mobileLinks = [
  { href: "#home", label: "Trang chủ", icon: "home" as const },
  { href: "#rooms", label: "Phòng", icon: "bed" as const },
  { href: "#experiences", label: "Dịch vụ", icon: "sparkles" as const },
  { href: "#booking", label: "Đặt phòng", icon: "calendar" as const },
  { href: "#location", label: "Vị trí", icon: "pin" as const },
];

const serviceGroups = [
  {
    title: "Khám phá",
    links: [
      { label: "Câu chuyện", href: "#about" },
      { label: "Shop", href: "#shop" },
    ],
  },
];

const activeSectionMap: Record<string, string> = {
  home: "#home",
  rooms: "#rooms",
  restaurant: "#restaurant",
  "quote-title": "#experiences",
  experiences: "#experiences",
  shop: "#experiences",
  location: "#location",
  "closing-title": "#location",
  booking: "#booking",
};

export function SiteHeader({ isHomePage = true }: { isHomePage?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesPinned, setServicesPinned] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionHref = (href: string) => isHomePage ? href : `/${href}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (!visibleEntry) return;

        const activeLink = activeSectionMap[visibleEntry.target.id];
        if (activeLink) setActiveHref(activeLink);
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );

    Object.keys(activeSectionMap).forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
    setServicesOpen(false);
    setServicesPinned(false);
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
  }

  function openServicesMenu() {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    setServicesOpen(true);
  }

  function scheduleServicesClose() {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    servicesCloseTimer.current = setTimeout(() => {
      if (!servicesPinned) setServicesOpen(false);
    }, 350);
  }

  return (
    <header className="site-header">
      <a aria-label={`${hotel.fullName} - Trang chủ`} className="brand" href={sectionHref("#home")} onClick={closeMenu}>
        <HotelLogo />
      </a>

      <button
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        type="button"
      >
        <UseAnimations
          active={menuOpen}
          animation={menu3}
          interaction="click-toggle"
          size={40}
        />
      </button>

      <nav aria-label="Điều hướng chính" className={`main-nav${menuOpen ? " main-nav--open" : ""}`}>
        {links.map((link) => link.hasDropdown ? (
          <div
            className="nav-dropdown"
            key={link.label}
            onMouseEnter={openServicesMenu}
            onMouseLeave={scheduleServicesClose}
          >
            <button
              aria-current={activeHref === link.href ? "location" : undefined}
              aria-controls="services-menu"
              aria-expanded={servicesOpen}
              className={`nav-dropdown__trigger${activeHref === link.href ? " is-active" : ""}`}
              onClick={() => {
                setServicesPinned((pinned) => !pinned);
                setServicesOpen((open) => !open);
              }}
              type="button"
            >
              {link.label}
              <Icon name="chevron" />
            </button>
            <div
              className="services-menu"
              hidden={!servicesOpen}
              id="services-menu"
              onMouseEnter={openServicesMenu}
              onMouseLeave={scheduleServicesClose}
            >
              <div className="services-menu__intro">
                <span>KHÁM PHÁ RIVER HOTEL</span>
                <p>Một kỳ nghỉ thư thái bên miền biển Hà Tiên.</p>
              </div>
              {serviceGroups.map((group) => (
                <div className="services-menu__group" key={group.title}>
                  <h2>{group.title}</h2>
                  {group.links.map((item) => (
                    <a href={sectionHref(item.href)} key={item.label} onClick={closeMenu}>
                      {item.label}
                    </a>
                  ))}
                </div>
              ))}
              <a className="services-menu__feature" href={sectionHref("#restaurant")} onClick={closeMenu}>
                <span aria-hidden="true" className="services-menu__feature-image" />
                <span className="services-menu__feature-copy">
                  <strong>RIVER HOTEL HÀ TIÊN</strong>
                  <span>Thức dậy cùng miền biển, tận hưởng kỳ nghỉ theo cách của riêng bạn.</span>
                  <span className="services-menu__feature-link">Xem phòng <Icon name="arrow" /></span>
                </span>
              </a>
              <div className="services-menu__quick-links">
                <a
                  aria-label={`Gọi tư vấn đặt phòng: ${hotel.phone}`}
                  href={`tel:${hotel.phone.replaceAll(" ", "")}`}
                >
                  <Icon name="phone" />
                  <span>{hotel.phone}</span>
                </a>
                <a
                  aria-label={`Chỉ đường đến khách sạn tại ${hotel.location}`}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.coordinates)}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon name="pin" />
                  <span>Chỉ đường</span>
                </a>
                <a className="services-menu__book-link" href={sectionHref("#booking")} onClick={closeMenu}>
                  Đặt phòng <UseAnimations animation={arrowRight} size={20} />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <a
            aria-current={activeHref === link.href ? "page" : undefined}
            className={activeHref === link.href ? "is-active" : undefined}
            href={sectionHref(link.href)}
            key={link.href}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <a className="button button--nav" href={sectionHref("#booking")} onClick={closeMenu}>
          Đặt phòng <UseAnimations animation={arrowRight} size={20} />
        </a>
      </nav>

      <nav
        aria-label="Điều hướng nhanh"
        className="mobile-action-bar"
        hidden={menuOpen}
      >
        {mobileLinks.map((link) => (
          <a
            aria-current={activeHref === link.href ? "location" : undefined}
            className={activeHref === link.href ? "is-active" : undefined}
            href={sectionHref(link.href)}
            key={link.href}
          >
            <Icon name={link.icon} />
            <span>{link.label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
