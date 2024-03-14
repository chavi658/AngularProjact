using AngularProject.Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LectureController : ControllerBase
    {
       private readonly DataContext _dataContext;
        public LectureController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }


        // GET: api/<LectureController>
        [HttpGet]
        public IEnumerable<Lecturer> Get()
        {
            return _dataContext.lecturers;
        }

        // GET api/<LectureController>/5
        [HttpGet("{id}")]
        public Lecturer Get(string id)
        {
            var index = _dataContext.lecturers.Find(x => x.LecturerId == id);
            return index;
        }

        // POST api/<LectureController>
        [HttpPost]
        public void Post([FromBody] Lecturer value)
        {
            _dataContext.lecturers.Add(value);
        }

        // PUT api/<LectureController>/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody] Lecturer value)
        {
            var index = _dataContext.lecturers.Find(x => x.LecturerId == id);
            index.LectureName = value.LectureName;
            index.LectureMail = value.LectureMail;
            index.LecturePassword = value.LecturePassword;
        }        

        // DELETE api/<LectureController>/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            var lecture = _dataContext.lecturers.Find(x => x.LecturerId == id);
            _dataContext.lecturers.Remove(lecture);
        }
    }
}
