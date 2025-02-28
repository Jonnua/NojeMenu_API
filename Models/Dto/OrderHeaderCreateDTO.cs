using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace NojeMenu_API.Models.Dto
{
    public class OrderHeaderCreateDTO
    {
        [Required]
        public string PickupName { get; set; }
        [Required]
        public string PickupPhoneNumber { get; set; }
        [Required]
        public string PickupEmail { get; set; }
        [Required]
        public string PickupAddress { get; set; }
        [Required]

        public string ApplicationUserId { get; set; }
        public double OrderTotal { get; set; }


        public string StripePaymentIntentId { get; set; }
        public string Status { get; set; }
        public int TotalItems { get; set; }


        public IEnumerable<OrderDetailsCreateDTO> OrderDetailsDTO { get; set; }
    }
}
