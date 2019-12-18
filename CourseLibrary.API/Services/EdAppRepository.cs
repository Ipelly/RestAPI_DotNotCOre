using EdApp.API.DbContexts;
using EdApp.API.Entities; 
using System;
using System.Collections.Generic;
using System.Linq;

namespace EdApp.API.Services
{
    public class EdAppRepository : IEdAppRepository, IDisposable
    {
        private readonly EdAppContext _context;

        public EdAppRepository(EdAppContext context )
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        
        public IEnumerable<Item> GetItems()
        {
            return _context.Items.OrderBy(c => c.Title).ToList();
        }

        public Item GetItem(Guid ItemId)
        {
            if (ItemId == Guid.Empty)
            {
                throw new ArgumentNullException(nameof(ItemId));
            }

            return _context.Items
              .Where(c => c.Id == ItemId).FirstOrDefault();
        }

        public void AddItem(Item Item)
        {
            if (Item == null)
            {
                throw new ArgumentNullException(nameof(Item));
            }
            // always set the UserId to the passed-in UserId
            _context.Items.Add(Item);
        }

        public void DeleteItem(Item Item)
        {
            _context.Items.Remove(Item);
        }

        public void UpdateItem(Item Item)
        {
            // no code in this implementation
        }


        public IEnumerable<User> GetUsers()
        {
            return _context.Users.ToList<User>();
        }

        public User GetUser(Guid UserId)
        {
            if (UserId == Guid.Empty)
            {
                throw new ArgumentNullException(nameof(UserId));
            }

            return _context.Users.FirstOrDefault(a => a.Id == UserId);
        }

        public void AddUser(User User)
        {
            if (User == null)
            {
                throw new ArgumentNullException(nameof(User));
            }

            // the repository fills the id (instead of using identity columns)
            User.Id = Guid.NewGuid();
            _context.Users.Add(User);
        }

        public bool UserExists(Guid UserId)
        {
            if (UserId == Guid.Empty)
            {
                throw new ArgumentNullException(nameof(UserId));
            }

            return _context.Users.Any(a => a.Id == UserId);
        }

        public void DeleteUser(User User)
        {
            if (User == null)
            {
                throw new ArgumentNullException(nameof(User));
            }

            _context.Users.Remove(User);
        }
         
        public IEnumerable<User> GetUsers(IEnumerable<Guid> UserIds)
        {
            if (UserIds == null)
            {
                throw new ArgumentNullException(nameof(UserIds));
            }

            return _context.Users.Where(a => UserIds.Contains(a.Id))
                .OrderBy(a => a.FirstName)
                .OrderBy(a => a.LastName)
                .ToList();
        }

        public void UpdateUser(User User)
        {
            // no code in this implementation
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
