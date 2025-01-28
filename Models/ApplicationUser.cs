using Microsoft.AspNetCore.Identity;

namespace NojeMenu_API.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Name { get; set; }
    }
}
