using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.PortableExecutable;

namespace NojeMenu_API.Models
{
    public class ShoppingCart
    {
        public int Id { get; set; }
        public string UserId { get; set; }


        public ICollection<CartItem> CartItems { get; set; }

        [NotMapped]
        public double CartTotal { get; set; }
        [NotMapped]
        public string StripePaymentIntentID { get; set; }
        [NotMapped]
        public string ClientSecret { get; set; }

    }


}
