using EdApp.API.DbContexts;
using EdApp.API.Entities; 
using System;
using System.Collections.Generic;
using System.Linq;

namespace EdApp.API.Services
{
    public class SoldItemRepository : ISoldItemRepository, IDisposable
    {
        private readonly EdAppContext _context;

        public SoldItemRepository(EdAppContext context )
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }
         

        public IEnumerable<SoldItem> GetSoldItems()
        {
            var soldItems = _context.SoldItems.OrderBy(c => c.Item.Title).ToList();
            soldItems.ToList().ForEach(
                    x =>
                    {
                        x.Item = _context.Items.Where(c => c.Id == x.ItemId).FirstOrDefault();
                        x.User = _context.Users.Where(c => c.Id == x.UserId).FirstOrDefault();
                    }
                );

            return soldItems;
        }

        public SoldItem GetSoldItem(Guid SoldItemId)
        {
            if (SoldItemId == Guid.Empty)
            {
                throw new ArgumentNullException(nameof(SoldItemId));
            }

            return _context.SoldItems
              .Where(c => c.Id == SoldItemId).FirstOrDefault();
        }

        public void AddSoldItem(SoldItem SoldItem)
        {
            if (SoldItem == null)
            {
                throw new ArgumentNullException(nameof(SoldItem));
            }
            // always set the UserId to the passed-in UserId
            _context.SoldItems.Add(SoldItem);

            var item = _context.Items.Where(c => c.Id == SoldItem.ItemId).FirstOrDefault();
            item.IsSold = true;
            _context.Items.Update(item);
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
