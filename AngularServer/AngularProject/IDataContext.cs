using AngularProject.Entities;

namespace AngularProject
{
    public interface IDataContext
    {
        // List<Lecturer> lecturers = new List<Lecturer>();
        List<Lecturer> lecturers { get; set; }
        List<Cours> courses { get; set; }
       List<User> users { get; set; }
       List<Category>categories { get; set; }
    }
}
