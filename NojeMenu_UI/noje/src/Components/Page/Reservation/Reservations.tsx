import React from "react";
import { useGetAllReservationsQuery  } from "../../../Apis/reservationApi.ts";
import ReservationList from "./ReservationList.tsx";


function Reservations() {
  const { data: reservations = [], isLoading } = useGetAllReservationsQuery();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Reservations</h2>
      <ReservationList isLoading={isLoading} reservations={reservations} />
    </div>
  );
}

export default Reservations;