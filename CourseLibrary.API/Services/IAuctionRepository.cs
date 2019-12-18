using EdApp.API.Entities;
using System;
using System.Collections.Generic;

namespace EdApp.API.Services
{
    public interface IAuctionRepository
    {    
        IEnumerable<Auction> GetAuctions();
        Auction GetAuction(Guid auctionId);
        void AddAuction(Auction auction);
        bool Save();
    }
}
