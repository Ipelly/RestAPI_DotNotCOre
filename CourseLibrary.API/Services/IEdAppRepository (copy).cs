using EdApp.API.Entities;
using System;
using System.Collections.Generic;

namespace EdApp.API.Services
{
    public interface IEdAppRepository
    {    
        IEnumerable<Item> GetItems();
        Item GetItem(Guid ItemId);
        void AddItem(Item Item);
        void UpdateItem(Item Item);
        void DeleteItem(Item Item);


        IEnumerable<User> GetUsers();
        User GetUser(Guid UserId);
        IEnumerable<User> GetUsers(IEnumerable<Guid> UserIds);
        void AddUser(User User);
        void DeleteUser(User User);
        void UpdateUser(User User);
        bool UserExists(Guid UserId);
        bool Save();
    }
}
