namespace Server.Models
{
    public class Item
    {
        public int Id { get; set; }

        public Universe Universe { get; set; }

        public ICollection<ItemEvent> ItemEvents { get; set; }
    }
}
