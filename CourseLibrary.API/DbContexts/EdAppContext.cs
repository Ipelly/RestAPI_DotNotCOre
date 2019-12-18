using EdApp.API.Entities;
using Microsoft.EntityFrameworkCore;
using System;

namespace EdApp.API.DbContexts
{
    public class EdAppContext : DbContext
    {
        public EdAppContext(DbContextOptions<EdAppContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Auction> Auctions { get; set; }
        public DbSet<Bid> Bids { get; set; }
        public DbSet<SoldItem> SoldItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // seed the database with dummy data
            modelBuilder.Entity<User>().HasData(
                new User()
                {
                    Id = Guid.Parse("d28888e9-2ba9-473a-a40f-e38cb54f9b35"),
                    FirstName = "Bill",
                    LastName = "Gates",
                    DateOfBirth = new DateTime(1650, 7, 23),
                },
                new User()
                {
                    Id = Guid.Parse("da2fd609-d754-4feb-8acd-c4f9ff13ba96"),
                    FirstName = "Steve",
                    LastName = "Jobs",
                    DateOfBirth = new DateTime(1668, 5, 21)
                },
                new User()
                {
                    Id = Guid.Parse("2902b665-1190-4c70-9915-b9c2d7680450"),
                    FirstName = "Paul",
                    LastName = "Allen",
                    DateOfBirth = new DateTime(1701, 12, 16)
                }

            );

            modelBuilder.Entity<Item>().HasData(
               new Item
               {
                   Id = Guid.Parse("5b1c2b4d-48c7-402a-80c3-cc796ad49c6b"),
                   Title = "Computer",
                   Description = "Commandeering a ship in rough waters isn't easy.",
                   Stock = 10,
                   InitPrice = 2000.00,
                   IsSold = false
               },
               new Item
               {
                   Id = Guid.Parse("d8663e5e-7494-4f81-8739-6e0de1bea7ee"),
                   Title = "Airbus",
                   Description = "In this Item, the User provides tips to avoid, or, if needed, overthrow pirate mutiny.",
                   Stock = 5,
                   InitPrice = 200000.00,
                   IsSold = false
               },
               new Item
               {
                   Id = Guid.Parse("d173e20d-159e-4127-9ce9-b0ac2564ad97"),
                   Title = "Robot",
                   Description = "Every good pirate loves rum, but it also has a tendency to get you into trouble.",
                   Stock = 20,
                   InitPrice = 500000.00,
                   IsSold = false
               }

            );

            modelBuilder.Entity<Auction>();
            modelBuilder.Entity<Bid>();
            modelBuilder.Entity<SoldItem>();

            base.OnModelCreating(modelBuilder);
        }
    }
}
