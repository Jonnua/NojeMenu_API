namespace NojeMenu_API.Models
{
    public class Payment
    {
        public int PaymentId { get; set; }
        public int OrderHeaderId { get; set; }

        public double Amount { get; set; }
        public string Method { get; set; } = "Card";
        public DateTime PaymentDate { get; set; } = DateTime.UtcNow;
        public string Status { get; set; } = "Pending";

        // lidhje
        public OrderHeader? OrderHeader { get; set; }
    }
}
