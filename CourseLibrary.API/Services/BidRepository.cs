using EdApp.API.DbContexts;
using EdApp.API.Entities; 
using System;
using System.Collections.Generic;
using System.Linq;

namespace EdApp.API.Services
{
    public class BidRepository : IBidRepository, IDisposable
    {
        private readonly EdAppContext _context;

        public BidRepository(EdAppContext context )
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        
        public IEnumerable<Bid> GetBids()
        {
            var bids = _context.Bids.OrderBy(c => c.Item.Title).ToList();
            bids.ToList().ForEach(
                    x =>
                    {
                        x.Auction = _context.Auctions.Where(c => c.Id == x.AuctionId).FirstOrDefault();
                        x.Item = _context.Items.Where(c => c.Id == x.ItemId).FirstOrDefault();
                        x.User = _context.Users.Where(c => c.Id == x.UserId).FirstOrDefault();
                    }
                );

            return bids;
            //return _context.Bids.OrderBy(c => c.Item.Title).ToList();
        }

        public Bid GetBid(Guid BidId)
        {
            if (BidId == Guid.Empty)
            {
                throw new ArgumentNullException(nameof(BidId));
            }

            var bid =  _context.Bids
              .Where(c => c.Id == BidId).FirstOrDefault();

            bid.Auction = _context.Auctions.Where(c => c.Id == bid.AuctionId).FirstOrDefault();
            bid.Item = _context.Items.Where(c => c.Id == bid.ItemId).FirstOrDefault();
            bid.User = _context.Users.Where(c => c.Id == bid.UserId).FirstOrDefault();

            return bid;
        }

        public void AddBid(Bid Bid)
        {
            if (Bid == null)
            {
                throw new ArgumentNullException(nameof(Bid));
            }
            // always set the UserId to the passed-in UserId
            _context.Bids.Add(Bid);
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
