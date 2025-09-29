import React from "react";
import { useGetAllReservationsQuery  } from "../../../Apis/reservationApi";

function Reservations() {
  const { data: reservations = [], isLoading } = useGetAllReservationsQuery();

  if (isLoading) return <p>Loading reservations...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Reservations</h2>
      <ul className="space-y-2">
        {reservations.map((r) => (
          <li key={r.id} className="border p-2 rounded">
            <strong>{r.customerName}</strong> –{" "}
            {new Date(r.reservationDate).toLocaleString()}
            <br />
            Guests: {r.guestsCount} | Status: {r.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reservations;
