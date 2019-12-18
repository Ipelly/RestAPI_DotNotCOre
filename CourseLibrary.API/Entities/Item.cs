using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace EdApp.API.Entities
{
    public class Item
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(200)]
        public string Title { get; set; }

        [Required]
        [MaxLength(1500)]
        public string Description { get; set; }

        [Required]
        public int Stock { get; set; }

        [Required]
        public double InitPrice { get; set; }

        [Required]
        public Boolean IsSold { get; set; }

    }
}
