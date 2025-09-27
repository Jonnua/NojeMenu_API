namespace NojeMenu_API.Models
{
    public class Staff
    {
        public int StaffId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Role { get; set; } = "Waiter"; // Chef, Waiter, Manager
        public string PhoneNumber { get; set; } = string.Empty;
        public string? Email { get; set; }
    }
}
