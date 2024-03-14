using AngularProject.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Numerics;
using static System.Net.WebRequestMethods;
using System.Reflection;
using System.Runtime.InteropServices;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
     static   public  List<Cours> courses= new List<Cours>()
        {
            new Cours()
            {
                CoursId = "CRS-123",
                CoursName = "Introduction to Python",
                CategoryId = "BACKEND",
                NumberOfSessions = 8,
                StartDate = DateTime.Parse("2024-03-11"),
                CourseSyllabus = new string[] { "Variables", "Data Types", "Control Flow", "Functions" },
                WayOfLearning = TheWayOfLearning.Zoom,
                LecturerId = "t12",
                Image = "../../../../assets/python.jpg"
            },
            new Cours()
            {
                CoursId = "CRS-456",
                CoursName = "C# TUTORIAL",
                CategoryId = "BACKEND",
                NumberOfSessions = 25,
                StartDate = DateTime.Parse("2024-04-21"),
                CourseSyllabus = new string[] { "Variables", "Data Types", "Arry", "Loops", "Functions","Matrix" ,"OOP","Linq","Lamda Expression"},
                WayOfLearning = TheWayOfLearning.frontal,
                LecturerId = "lea11",
                Image ="../../../../assets/beg-dotnet_csharp-106023-banner.png"
            },new Cours()
            {
                CoursId = "CRS-678",
                CoursName = "JAVA TUTORIAL",
                CategoryId = "BACKEND",
                NumberOfSessions = 20,
                StartDate = DateTime.Parse("2024-04-01"),
                CourseSyllabus = new string[] { "Variables", "Data Types", "Arry", "Loops", "Functions","Matrix" ,"OOP","String"},
                WayOfLearning = TheWayOfLearning.frontal,
                LecturerId = "lea11",
                Image =  "../../../../assets/java (2).png"
            },new Cours()
            {
                CoursId = "CRS-891",
                CoursName = ".Net tutorial",
                CategoryId = "BACKEND",
                NumberOfSessions = 10,
                StartDate = DateTime.Parse("2024-06-01"),
                CourseSyllabus = new string[] { " HTTP Protocol", " RESTful", " Clean Architecture", " Web API","Dependency Injection"," Entity Framework"," Asynchronous programming"," AutoMapper"," Middlewares" },
                WayOfLearning = TheWayOfLearning.frontal,
                LecturerId = "natan58",
                Image =  "../../../../assets/.net (2).png"
            },new Cours()
            {
                CoursId = "CRS-111",
                CoursName = "REACT tutorial",
                CategoryId = "FRONTEND",
                NumberOfSessions = 8,
                StartDate = DateTime.Parse("2024-04-15"),
                CourseSyllabus = new string[] { "Components", "State", "JSX", "Axios" },
                WayOfLearning = TheWayOfLearning.frontal,
                LecturerId = "lea11",
                Image =  "../../../../assets/REACT.png"
            },new Cours()
            {
                CoursId = "CRS-888",
                CoursName = "ANGULAR tutorial",
                CategoryId = "FRONTEND",
                NumberOfSessions = 15,
                StartDate = DateTime.Parse("2024-03-15"),
                CourseSyllabus = new string[] { "DataFrames", "Series", "Manipulation", "Visualization" },
                WayOfLearning = TheWayOfLearning.frontal,
                LecturerId = "lea11",
                Image =  "../../../../assets/Angular.png"
            }
        };
        // GET: api/<CourceController>
        [HttpGet]
        public List<Cours> Get()
        {
            return courses;
        }

        // GET api/<CourceController>/5
        [HttpGet("{id}")]
        public Cours Get(string id)
        {
            return courses.Find(x => x.CoursId == id);
        }

        // POST api/<CourceController>
        [HttpPost]
        public void Post([FromBody] Cours value)
        {
            courses.Add(value);
        }

        // PUT api/<CourceController>/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody] Cours value)
        {
            var index =courses.Find(x => x.CoursId == id);
            index.CourseSyllabus = value.CourseSyllabus;
            index.CoursName = value.CoursName;
            index.NumberOfSessions = value.NumberOfSessions;
            index.LecturerId = value.LecturerId;
            index.CategoryId = value.CategoryId;
            index.WayOfLearning = value.WayOfLearning;
            index.StartDate = value.StartDate;
            index.Image = value.Image;

        }

        // DELETE api/<CourceController>/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            var course = courses.Find(x => x.CoursId == id);
           courses.Remove(course);
        }
    }
}
