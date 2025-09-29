import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetReservationByIdQuery,
    useUpdateReservationMutation,
    useDeleteReservationMutation
 } from "../../../Apis/reservationApi.ts";
import MainLoader from "../Common/MainLoader.tsx";



function ReservationDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: reservation, isLoading } = useGetReservationByIdQuery(Number(id));
  const [updateReservation] = useUpdateReservationMutation();
  const [deleteReservation] = useDeleteReservationMutation();

  // Editable fields
  const [status, setStatus] = useState(reservation?.status ?? "Pending");

  if (isLoading) return <MainLoader />;

  if (!reservation) return <p>Reservation not found.</p>;

  const handleUpdate = async () => {
    await updateReservation({ ...reservation, status });
    alert("Reservation updated!");
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this reservation?")) {
      await deleteReservation(reservation.id);
      navigate("/reservations");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Reservation Details – #{reservation.id}
      </h2>
      <div className="border p-4 rounded space-y-2">
        <p>
          <strong>Name:</strong> {reservation.customerName}
        </p>
        <p>
          <strong>Phone:</strong> {reservation.phone}
        </p>
        <p>
          <strong>Email:</strong> {reservation.email}
        </p>
        <p>
          <strong>Date:</strong>{" "}
          {new Date(reservation.reservationDate).toLocaleString()}
        </p>
        <p>
          <strong>Guests:</strong> {reservation.guestsCount}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="form-select d-inline w-auto"
          >
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </p>

        <div className="d-flex gap-2 mt-3">
          <button className="btn btn-success" onClick={handleUpdate}>
            Save Changes
          </button>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete Reservation
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/reservations")}
          >
            Back to List
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReservationDetails;