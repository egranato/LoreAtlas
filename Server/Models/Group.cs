namespace Server.Models
{
    public class Group
    {
        public int Id { get; set; }

        public Universe Universe { get; set; }

        public ICollection<GroupEvent> GroupEvents { get; set; }
    }
}
