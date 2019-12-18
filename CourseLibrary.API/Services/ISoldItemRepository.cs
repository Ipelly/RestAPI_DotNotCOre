using EdApp.API.Entities;
using System;
using System.Collections.Generic;

namespace EdApp.API.Services
{
    public interface ISoldItemRepository
    {
        IEnumerable<SoldItem> GetSoldItems();
        SoldItem GetSoldItem(Guid SoldItemId);
        void AddSoldItem(SoldItem SoldItem);
        bool Save();
    }
}
