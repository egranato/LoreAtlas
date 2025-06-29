namespace Server.Models
{
    public class Narrative
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public Universe Universe { get; set; }

        public ICollection<NarrativeEvent> NarrativeEvents { get; set; }
    }
}
