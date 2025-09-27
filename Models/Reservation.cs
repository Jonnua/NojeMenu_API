using System.ComponentModel.DataAnnotations;

public class Reservation
{
    public int Id { get; set; }
    [Required]
    public string CustomerName { get; set; }
    [Required]
    public string Phone { get; set; }
    public string Email { get; set; }
    [Required]
    public DateTime ReservationDate { get; set; }
    [Range(1, 50)]
    public int GuestsCount { get; set; }
    public string Status { get; set; } // Pending, Confirmed, Cancelled

}
