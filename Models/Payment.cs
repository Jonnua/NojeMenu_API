namespace NojeMenu_API.Models
{
    public class Payment
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public string Method { get; set; } // Card, Cash
        public double Amount { get; set; }
        public DateTime PaymentDate { get; set; }
        public string Status { get; set; } // Paid, Pending, Failed
    }
}