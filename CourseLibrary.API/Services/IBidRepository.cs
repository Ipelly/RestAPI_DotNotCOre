using EdApp.API.Entities;
using System;
using System.Collections.Generic;

namespace EdApp.API.Services
{
    public interface IBidRepository
    {    
        IEnumerable<Bid> GetBids();
        Bid GetBid(Guid bidId);
        void AddBid(Bid bit);
        bool Save();
    }
}
