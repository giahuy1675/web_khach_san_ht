export type ServiceIconName =
  | "pool"
  | "spa"
  | "family"
  | "fitness"
  | "shuttle"
  | "breakfast"
  | "wifi"
  | "parking";

export const servicesContent = {
  title: "Dịch vụ và tiện ích",
  description:
    "Khám phá hàng loạt dịch vụ và tiện nghi được thiết kế nhằm mang đến cho bạn kỳ lưu trú thú vị và thoải mái nhất.",
  extraFeeLabel: "Phí bổ sung",
  moreLabel: "Tìm hiểu thêm",
  moreHref: "#lien-he",
  items: [
    { id: "pool", label: "Bể bơi ngoài trời", icon: "pool", extraFee: false },
    { id: "spa", label: "Trị liệu spa", icon: "spa", extraFee: true },
    { id: "family", label: "Phòng gia đình", icon: "family", extraFee: false },
    { id: "breakfast", label: "Bữa sáng", icon: "breakfast", extraFee: false },
    { id: "fitness", label: "Trung tâm thể dục", icon: "fitness", extraFee: false },
    { id: "shuttle", label: "Đưa đón sân bay", icon: "shuttle", extraFee: true },
    { id: "wifi", label: "Wi-Fi miễn phí", icon: "wifi", extraFee: false },
    { id: "parking", label: "Bãi đỗ xe", icon: "parking", extraFee: false },
  ] satisfies { id: string; label: string; icon: ServiceIconName; extraFee: boolean }[],
};
