import { assetPath } from "@/shared/lib/assets";

export const footerContent = {
  columns: [
    {
      sections: [
        {
          title: "GIỚI THIỆU VỀ",
          links: [
            { label: "Về River Hotel", href: "#gioi-thieu" },
            { label: "RiverRewards", href: "#dang-nhap" },
            { label: "Ưu đãi đặc biệt", href: "#luu-tru" },
            { label: "Blog du lịch", href: "#gioi-thieu" },
            { label: "Câu chuyện của chúng tôi", href: "#gioi-thieu" },
            { label: "Tuyển dụng", href: "#lien-he" },
            { label: "Phòng chống gian lận", href: "#lien-he" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "ĐẶT PHÒNG",
          links: [
            { label: "Quản lý đặt phòng", href: "#dang-nhap" },
            { label: "Đặt phòng qua điện thoại", href: "#lien-he" },
            { label: "Chính sách hủy phòng", href: "#lien-he" },
          ],
        },
        {
          title: "DOANH NGHIỆP",
          links: [
            { label: "Hợp tác công ty", href: "#lien-he" },
            { label: "Đại lý du lịch", href: "#lien-he" },
            { label: "Hội họp và sự kiện", href: "#lien-he" },
          ],
        },
      ],
    },
  ],
  contactTitle: "LIÊN HỆ",
  socialTitle: "GIỮ KẾT NỐI TRÊN",
  socials: [
    { id: "facebook", label: "Facebook", href: "https://www.facebook.com" },
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com" },
    { id: "x", label: "X", href: "https://x.com" },
  ],
  newsletter: {
    title: "Đăng ký nhận bản tin",
    placeholder: "Địa chỉ email",
    submitLabel: "Đăng ký",
    successMessage: "Cảm ơn bạn đã đăng ký!",
  },
  app: {
    title: "Tải xuống ỨNG DỤNG River Hotel dành cho hệ điều hành iOS và Android để có trải nghiệm tốt hơn trên thiết bị di động",
    buttonLabel: "Tải xuống ỨNG DỤNG của chúng tôi",
    buttonHref: "#lien-he",
    phoneTitle: "River Hotel Hà Tiên",
    phoneImage: assetPath("/images/mega-menu/stay.jpg"),
  },
  legalLinks: [
    { label: "Điều khoản sử dụng", href: "#lien-he" },
    { label: "Chính sách quyền riêng tư", href: "#lien-he" },
    { label: "Chính sách cookie", href: "#lien-he" },
    { label: "Cài đặt Cookie", href: "#lien-he" },
    { label: "Trợ năng kỹ thuật số", href: "#lien-he" },
  ],
  copyright: "©2026 Thông tin sở hữu độc quyền của River Hotel Hà Tiên. Bảo lưu mọi quyền.",
};
