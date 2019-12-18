using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EdApp.API.Entities
{
    public class Bid
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public double Price { get; set; }

        [ForeignKey("AuctionId")]
        public Auction Auction { get; set; }
        public Guid AuctionId { get; set; }

        [ForeignKey("ItemId")]
        public Item Item { get; set; }
        public Guid ItemId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
        public Guid UserId { get; set; }
    }
}
