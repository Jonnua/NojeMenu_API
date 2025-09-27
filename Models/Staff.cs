using System.ComponentModel.DataAnnotations;

namespace NojeMenu_API.Models
{
    public class Staff
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Role { get; set; } // Waiter, Chef, Manager
        public string Phone { get; set; }
        public string Shift { get; set; } // Morning, Evening
    }
}