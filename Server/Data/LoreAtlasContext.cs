using Microsoft.AspNetCore.Http.Features;
using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Data
{
    public class LoreAtlasContext : DbContext
    {
        public LoreAtlasContext(DbContextOptions<LoreAtlasContext> options) : base(options) { }

        // Entities
        public DbSet<Universe> Universes { get; set; }
        public DbSet<Narrative> Narrative { get; set; }
        public DbSet<Character> Characters { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Place> Places { get; set; }
        public DbSet<Event> Events { get; set; }

        // Join Tables
        public DbSet<CharacterEvent> CharacterEvents { get; set; }
        public DbSet<GroupEvent> GroupEvents { get; set; }
        public DbSet<ItemEvent> ItemEvents { get; set; }
        public DbSet<NarrativeEvent> NarrativeEvents { get; set; }
        public DbSet<PlaceEvent> PlaceEvents { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Entities
            modelBuilder.Entity<Universe>().ToTable("Universe");
            modelBuilder.Entity<Narrative>().ToTable("Narrative");
            modelBuilder.Entity<Character>().ToTable("Character");
            modelBuilder.Entity<Group>().ToTable("Group");
            modelBuilder.Entity<Item>().ToTable("Item");
            modelBuilder.Entity<Place>().ToTable("Place");
            modelBuilder.Entity<Event>().ToTable("Event");

            // Join Tables
            modelBuilder.Entity<CharacterEvent>().ToTable("CharacterEvent");
            modelBuilder.Entity<GroupEvent>().ToTable("GroupEvent");
            modelBuilder.Entity<ItemEvent>().ToTable("ItemEvent");
            modelBuilder.Entity<NarrativeEvent>().ToTable("NarrativeEvent");
            modelBuilder.Entity<PlaceEvent>().ToTable("PlaceEvent");

            // Character Event
            modelBuilder.Entity<CharacterEvent>()
                .HasKey(ne => new { ne.CharacterId, ne.EventId });

            modelBuilder.Entity<CharacterEvent>()
                .HasOne(ne => ne.Character)
                .WithMany(c => c.CharacterEvents)
                .HasForeignKey(ne => ne.CharacterId);

            modelBuilder.Entity<CharacterEvent>()
                .HasOne(ne => ne.Event)
                .WithMany(e => e.CharacterEvents)
                .HasForeignKey(ne => ne.EventId);

            // Group Event
            modelBuilder.Entity<GroupEvent>()
                .HasKey(ne => new { ne.GroupId, ne.EventId });

            modelBuilder.Entity<GroupEvent>()
                .HasOne(ne => ne.Group)
                .WithMany(g => g.GroupEvents)
                .HasForeignKey(ne => ne.GroupId);

            modelBuilder.Entity<GroupEvent>()
                .HasOne(ne => ne.Event)
                .WithMany(e => e.GroupEvents)
                .HasForeignKey(ne => ne.EventId);

            // Item Event
            modelBuilder.Entity<ItemEvent>()
                .HasKey(ne => new { ne.ItemId, ne.EventId });

            modelBuilder.Entity<ItemEvent>()
                .HasOne(ne => ne.Item)
                .WithMany(i => i.ItemEvents)
                .HasForeignKey(ne => ne.ItemId);

            modelBuilder.Entity<ItemEvent>()
                .HasOne(ne => ne.Event)
                .WithMany(e => e.ItemEvents)
                .HasForeignKey(ne => ne.EventId);

            // Narrative Event
            modelBuilder.Entity<NarrativeEvent>()
                .HasKey(ne => new { ne.NarrativeId, ne.EventId });

            modelBuilder.Entity<NarrativeEvent>()
                .HasOne(ne => ne.Narrative)
                .WithMany(n => n.NarrativeEvents)
                .HasForeignKey(ne => ne.NarrativeId);

            modelBuilder.Entity<NarrativeEvent>()
                .HasOne(ne => ne.Event)
                .WithMany(e => e.NarrativeEvents)
                .HasForeignKey(ne => ne.EventId);

            // Place Event
            modelBuilder.Entity<PlaceEvent>()
                .HasKey(ne => new { ne.PlaceId, ne.EventId });

            modelBuilder.Entity<PlaceEvent>()
                .HasOne(ne => ne.Place)
                .WithMany(n => n.PlaceEvents)
                .HasForeignKey(ne => ne.PlaceId);

            modelBuilder.Entity<PlaceEvent>()
                .HasOne(ne => ne.Event)
                .WithMany(e => e.PlaceEvents)
                .HasForeignKey(ne => ne.EventId);
        }
    }
}
