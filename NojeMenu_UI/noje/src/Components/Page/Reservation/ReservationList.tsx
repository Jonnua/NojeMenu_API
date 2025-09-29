import React from "react";
import { useNavigate } from "react-router-dom";
import { Reservation } from "../../../Apis/reservationApi.ts";
import MainLoader from "../Common/MainLoader.tsx";

interface ReservationListProps {
  isLoading: boolean;
  reservations: Reservation[];
}

function ReservationList({ isLoading, reservations }: ReservationListProps) {
  const navigate = useNavigate();

  return (
    <>
      {isLoading && <MainLoader />}
      {!isLoading && (
        <div className="table px-5">
          <div className="p-2">
            <div className="row border fw-bold">
              <div className="col-1">ID</div>
              <div className="col-2">Name</div>
              <div className="col-2">Phone</div>
              <div className="col-2">Email</div>
              <div className="col-2">Date</div>
              <div className="col-1">Guests</div>
              <div className="col-1">Status</div>
              <div className="col-1"></div>
            </div>
            {reservations.map((r) => (
              <div className="row border" key={r.id}>
                <div className="col-1">{r.id}</div>
                <div className="col-2">{r.customerName}</div>
                <div className="col-2">{r.phone}</div>
                <div className="col-2">{r.email}</div>
                <div className="col-2">
                  {new Date(r.reservationDate).toLocaleString()}
                </div>
                <div className="col-1">{r.guestsCount}</div>
                <div className="col-1">
                  <span
                    className={`badge bg-${
                      r.status === "Confirmed"
                        ? "success"
                        : r.status === "Pending"
                        ? "warning"
                        : "danger"
                    }`}
                  >
                    {r.status}
                  </span>
                </div>
                <div className="col-1">
                  <button
                    className="btn btn-success"
                    onClick={() => navigate(`/reservations/details/${r.id}`)}
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ReservationList;