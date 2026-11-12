"use client";

import { useState, type FormEvent } from "react";

export function BookingForm() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (checkOut <= checkIn) {
      setMessage("Ngày trả phòng cần sau ngày nhận phòng.");
      return;
    }

    setMessage("Đây là bản giao diện demo; thông tin chưa được gửi để đặt phòng.");
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label className="booking-field">
        <span>Nhận phòng</span>
        <input
          aria-label="Ngày nhận phòng"
          name="checkin"
          onChange={(event) => {
            setCheckIn(event.target.value);
            setMessage("");
          }}
          required
          type="date"
          value={checkIn}
        />
      </label>
      <span aria-hidden="true" className="booking-divider" />
      <label className="booking-field">
        <span>Trả phòng</span>
        <input
          aria-label="Ngày trả phòng"
          min={checkIn || undefined}
          name="checkout"
          onChange={(event) => {
            setCheckOut(event.target.value);
            setMessage("");
          }}
          required
          type="date"
          value={checkOut}
        />
      </label>
      <span aria-hidden="true" className="booking-divider" />
      <label className="booking-field booking-field--guests">
        <span>Số khách</span>
        <select aria-label="Số khách" defaultValue="2" name="guests">
          <option value="1">1 khách</option>
          <option value="2">2 khách</option>
          <option value="3">3 khách</option>
          <option value="4">4 khách</option>
        </select>
      </label>
      <button className="button button--dark booking-submit" type="submit">
        Tìm phòng <span aria-hidden="true">↗</span>
      </button>
      <p aria-live="polite" className="booking-message">
        {message}
      </p>
    </form>
  );
}
