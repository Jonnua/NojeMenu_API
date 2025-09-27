namespace NojeMenu_API.Models
{
    public class Address
    {
        public int AddressId { get; set; }
        public string UserId { get; set; } = string.Empty;

        public string Street { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string PostalCode { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;

        // lidhje me përdoruesin
        public ApplicationUser? User { get; set; }
    }
}
