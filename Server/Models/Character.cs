namespace Server.Models
{
    public class Character
    {
        public int Id { get; set; }

        public Universe Universe { get; set; }

        public ICollection<CharacterEvent> CharacterEvents { get; set; }
    }
}
