using AngularProject.Entities;

namespace AngularProject
{
    using System;
    using System.Collections.Generic;
    public class DataContext 
    {
       public  List<Lecturer> lecturers { get; set; }
        public static List<Cours> courses { get; set; }
        public List<User> users { get; set; }
        public List<Category> categories { get; set; }

        public DataContext()
        {
            categories = new List<Category>()
        {
            new Category
            {
                CategoryId = "CAT-PROG",
                Name = "Programming",
                Path = "/programming"
            },
            new Category
            {
                CategoryId = "CAT-DATA",
                Name = "Data Analysis",
                Path = "/data-analysis"
            },
            new Category
            {
                CategoryId = "CAT-MATH",
                Name = "Mathematics",
                Path = "/mathematics"
            },
            new Category
            {
                CategoryId = "CAT-SCIENCE",
                Name = "Science",
                Path = "/science"
            }
        };

            courses = new List<Cours>()
        {
            new Cours()
            {
                CoursId = "CRS-123",
                CoursName = "Introduction to Python",
                CategoryId = "CAT-PROG",
                NumberOfSessions = 8,
                StartDate = DateTime.Parse("2024-03-11"),
                CourseSyllabus = new string[] { "Variables", "Data Types", "Control Flow", "Functions" },
                WayOfLearning = TheWayOfLearning.Zoom,
                LecturerId = "LEC-001",
                Image = "course_image.jpg"
            },
            new Cours()
            {
                CoursId = "CRS-456",
                CoursName = "Data Analysis with Pandas",
                CategoryId = "CAT-DATA",
                NumberOfSessions = 10,
                StartDate = DateTime.Parse("2024-04-01"),
                CourseSyllabus = new string[] { "DataFrames", "Series", "Manipulation", "Visualization" },
                WayOfLearning = TheWayOfLearning.frontal,
                LecturerId = "LEC-002",
                Image = "data_analysis.png"
            }
        };

            lecturers = new List<Lecturer>()
        {
            new Lecturer
            {
                LecturerId = "LEC-001",
                LectureName = "Gai Cohen",
                LectureAdress = "Ben Gurion 32 Tel Aviv",
                LectureMail = "guy.cohen@university.edu",
                LecturePassword = "password123"
            },
            new Lecturer
            {
                LecturerId = "LEC-002",
                LectureName = "Michal Levi",
                LectureAdress = "Arazim Jerusalem",
                LectureMail = "michal.levi@university.edu",
                LecturePassword = "password456"
            }
        };

            users = new List<User>
        {
            new User{UserId= "123", Name="chana", Address="sokolov", Mail="chana@gmail.com", Password="12346"},
            new User{UserId= "456", Name="sara", Address="ranbam", Mail="Sara@gmail.com", Password="12365"},
            new User{UserId= "789", Name="rivka", Address="shmaya", Mail="rivka@gmail.com", Password="987456"}
        };
        }
    }






}
    
 

    