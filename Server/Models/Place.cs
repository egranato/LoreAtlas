namespace Server.Models
{
    public class Place
    {
        public int Id { get; set; }

        public Universe Universe { get; set; }

        public ICollection<PlaceEvent> PlaceEvents { get; set; }
    }
}
