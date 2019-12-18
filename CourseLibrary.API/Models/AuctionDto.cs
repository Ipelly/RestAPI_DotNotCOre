using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EdApp.API.Models
{
    public class AuctionDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; } 
        public int DayLeft { get; set; }
    }
}
