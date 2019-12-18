using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EdApp.API.Entities
{
    public class SoldItem
    {
        [Key]
        public Guid Id { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }

        [Required]
        public Guid UserId { get; set; }

        [ForeignKey("ItemId")]
        public Item Item { get; set; }

        [Required]
        public Guid ItemId { get; set; }
    }
}
