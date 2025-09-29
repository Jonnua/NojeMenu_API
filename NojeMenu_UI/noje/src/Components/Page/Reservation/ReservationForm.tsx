import React, { useState } from "react";
import { useCreateReservationMutation } from "../../../Apis/reservationApi.ts";

function ReservationForm() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [guestsCount, setGuestsCount] = useState(1);

  const [createReservation] = useCreateReservationMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createReservation({
      customerName,
      phone,
      email,
      reservationDate,
      guestsCount,
      status: "Pending",
    });
    setCustomerName("");
    setPhone("");
    setEmail("");
    setReservationDate("");
    setGuestsCount(1);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded space-y-4">
      <h3 className="text-lg font-semibold">Create Reservation</h3>
      <input
        type="text"
        placeholder="Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="datetime-local"
        value={reservationDate}
        onChange={(e) => setReservationDate(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="number"
        min="1"
        value={guestsCount}
        onChange={(e) => setGuestsCount(Number(e.target.value))}
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Reservation
      </button>
    </form>
  );
}

export default ReservationForm;
