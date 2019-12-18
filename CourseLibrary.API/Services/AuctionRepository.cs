using EdApp.API.DbContexts;
using EdApp.API.Entities; 
using System;
using System.Collections.Generic;
using System.Linq;

namespace EdApp.API.Services
{
    public class AuctionRepository : IAuctionRepository, IDisposable
    {
        private readonly EdAppContext _context;

        public AuctionRepository(EdAppContext context )
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        
        public IEnumerable<Auction> GetAuctions()
        {
            return _context.Auctions.OrderBy(c => c.Name).ToList();
        }

        public Auction GetAuction(Guid AuctionId)
        {
            if (AuctionId == Guid.Empty)
            {
                throw new ArgumentNullException(nameof(AuctionId));
            }

            return _context.Auctions
              .Where(c => c.Id == AuctionId).FirstOrDefault();
        }

        public void AddAuction(Auction Auction)
        {
            if (Auction == null)
            {
                throw new ArgumentNullException(nameof(Auction));
            }
            // always set the UserId to the passed-in UserId
            _context.Auctions.Add(Auction);
        }

        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
               // dispose resources when needed
            }
        }
    }
}
