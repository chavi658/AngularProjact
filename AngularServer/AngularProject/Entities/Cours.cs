namespace AngularProject.Entities
{
    public enum TheWayOfLearning
    {
        Zoom,
        frontal,
     
    }
    public class Cours
    {

        public string CoursId { get; set; }
        public string CoursName { get; set; }
        public string  CategoryId { get; set; }
        public int NumberOfSessions { get; set; }
        public DateTime StartDate { get; set; }
        public string[] CourseSyllabus { get; set; }
        public TheWayOfLearning WayOfLearning { get; set; }
        public string LecturerId { get; set; }
        public string Image { get; set; }



    }
}
