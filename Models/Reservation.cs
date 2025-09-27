namespace NojeMenu_API.Models
{
    public class Reservation
    {
        public int ReservationId { get; set; }
        public string UserId { get; set; } = string.Empty;

        public int TableNumber { get; set; }
        public int Guests { get; set; }
        public DateTime ReservationDate { get; set; }
        public string Status { get; set; } = "Pending";

        // lidhje me përdoruesin
        public ApplicationUser? User { get; set; }
    }
}
