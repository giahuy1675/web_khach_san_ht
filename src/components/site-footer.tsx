import { HotelLogo } from "@/components/hotel-logo";
import { Icon } from "@/components/icons";
import { NewsletterForm } from "@/components/newsletter-form";
import { hotel } from "@/data/hotel";

export function SiteFooter({ isHomePage = true }: { isHomePage?: boolean }) {
  const homeHref = (hash: string) => isHomePage ? hash : `/${hash}`;

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <a aria-label={`${hotel.fullName} - Trang chủ`} className="brand brand--footer" href={homeHref("#home")}>
            <HotelLogo footer />
          </a>
          <p>Trải nghiệm nghỉ dưỡng và ẩm thực trọn vẹn tại Hà Tiên.</p>
        </div>
        <div className="site-footer__contact">
          <h2>Liên hệ</h2>
          <a href={`mailto:${hotel.email}`}>Email: {hotel.email}</a>
          <a href={`tel:${hotel.phone.replaceAll(" ", "")}`}>Điện thoại: {hotel.phone}</a>
          <p>Địa chỉ: {hotel.address}</p>
        </div>
        <nav aria-label="Liên kết footer" className="site-footer__links">
          <h2>Khám phá</h2>
          <a href={homeHref("#rooms")}>Phòng nghỉ</a>
          <a href={homeHref("#restaurant")}>Nhà hàng</a>
          <a href={homeHref("#experiences")}>Trải nghiệm</a>
          <a href={homeHref("#location")}>Vị trí</a>
        </nav>
        <div className="site-footer__newsletter">
          <h2>Nhận tin từ {hotel.name}</h2>
          <p>Đăng ký để nhận ưu đãi, tin tức và các hoạt động mới nhất.</p>
          <NewsletterForm />
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} {hotel.fullName}. All rights reserved.</span>
        <a href={homeHref("#home")}>Trở về đầu trang <Icon name="arrow" /></a>
      </div>
    </footer>
  );
}
