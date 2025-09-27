namespace NojeMenu_API.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }

        // navigim
        public ICollection<MenuItem>? MenuItems { get; set; }
    }
}
