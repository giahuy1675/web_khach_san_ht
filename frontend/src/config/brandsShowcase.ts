import { megaMenuPanels } from "./megaMenu";

const details = [
  { tagline: "Một kỳ nghỉ trọn vẹn bên dòng sông", dotColor: "#c9794a" },
  { tagline: "Những căn villa riêng tư giữa thiên nhiên", dotColor: "#9a9a9a" },
  { tagline: "Khu nghỉ dưỡng dành cho cả gia đình", dotColor: "#ffffff" },
  { tagline: "Suite rộng rãi, đầy đủ tiện nghi cho kỳ nghỉ dài ngày", dotColor: "#7fa37a" },
  { tagline: "Khách sạn trung tâm Hà Tiên", dotColor: "#8c8c8c" },
  { tagline: "Căn hộ dịch vụ cho lưu trú dài hạn", dotColor: "#2a9fd6" },
  { tagline: "Lưu trú tiện lợi, giá hợp lý", dotColor: "#32b8b0" },
  { tagline: "Nhà nghỉ thân thiện cho mọi hành trình", dotColor: "#d6a62a" },
  { tagline: "Trải nghiệm cắm trại ven sông", dotColor: "#b86a9a" },
];

export const brandsShowcaseContent = {
  title: "Khám phá thương hiệu của chúng tôi",
  trackLabel: "Danh sách thương hiệu",
  brands: megaMenuPanels.brands.items.map((brand, index) => ({
    ...brand,
    ...details[index],
  })),
};
