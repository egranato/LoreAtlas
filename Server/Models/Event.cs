namespace Server.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Date { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public Universe Universe { get; set; }

        public ICollection<CharacterEvent> CharacterEvents { get; set; }
        public ICollection<GroupEvent> GroupEvents { get; set; }
        public ICollection<ItemEvent> ItemEvents { get; set; }
        public ICollection<NarrativeEvent> NarrativeEvents { get; set; }
        public ICollection<PlaceEvent> PlaceEvents { get; set; }
    }

    public class CharacterEvent
    {
        public int Id { get; set; }

        public int CharacterId { get; set; }
        public Character Character { get; set; }

        public int EventId { get; set; }
        public Event Event { get; set; }
    }

    public class GroupEvent
    {
        public int Id { get; set; }

        public int GroupId { get; set; }
        public Group Group { get; set; }

        public int EventId { get; set; }
        public Event Event { get; set; }
    }

    public class ItemEvent
    {
        public int Id { get; set; }

        public int ItemId { get; set; }
        public Item Item { get; set; }

        public int EventId { get; set; }
        public Event Event { get; set; }
    }

    public class NarrativeEvent
    {
        public int Id { get; set; }

        public int NarrativeId { get; set; }
        public Narrative Narrative { get; set; }

        public int EventId { get; set; }
        public Event Event { get; set; }
    }

    public class PlaceEvent
    {
        public int Id { get; set; }

        public int PlaceId { get; set; }
        public Place Place { get; set; }

        public int EventId { get; set; }
        public Event Event { get; set; }
    }
}
