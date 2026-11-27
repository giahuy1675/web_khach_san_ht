export type BookingPopoverKind = "dates" | "guests" | "discount";

export type PopoverAnchor = {
  left: number;
  top: number;
  width: number;
};

export type BookingDateRange = {
  checkIn: string | null;
  checkOut: string | null;
};

export type GuestSelection = {
  rooms: number;
  adults: number;
  children: number;
  petsIncluded: boolean;
};

export type DiscountCategory = "promotion" | "company" | null;
