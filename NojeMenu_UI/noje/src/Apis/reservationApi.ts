import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Reservation {
  id: number;
  customerName: string;
  phone: string;
  email: string;
  reservationDate: string; // ose Date, por API shpesh kthen string
  guestsCount: number;
  status: string;
}

const reservationApi = createApi({
  reducerPath: "reservationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://redmangoapi.azurewebsites.net/api/", // ose http://localhost:5105/api/
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Reservations"],
  endpoints: (builder) => ({
    getAllReservations: builder.query<Reservation[], void>({
      query: () => "reservation",
      providesTags: ["Reservations"],
    }),
    getReservationById: builder.query<Reservation, number>({
      query: (id) => `reservation/${id}`,
      providesTags: ["Reservations"],
    }),
    createReservation: builder.mutation<Reservation, Partial<Reservation>>({
      query: (reservation) => ({
        url: "reservation",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: reservation,
      }),
      invalidatesTags: ["Reservations"],
    }),
    updateReservation: builder.mutation<void, Reservation>({
      query: (reservation) => ({
        url: `reservation/${reservation.id}`,
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: reservation,
      }),
      invalidatesTags: ["Reservations"],
    }),
    deleteReservation: builder.mutation<void, number>({
      query: (id) => ({
        url: `reservation/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Reservations"],
    }),
  }),
});

export const {
  useGetAllReservationsQuery,
  useGetReservationByIdQuery,
  useCreateReservationMutation,
  useUpdateReservationMutation,
  useDeleteReservationMutation,
} = reservationApi;

export default reservationApi;
