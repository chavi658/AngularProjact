using AngularProject.Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase

    {
        private readonly DataContext _dataContext;
        public UserController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }



        // GET: api/<UserController>
        [HttpGet]
public IEnumerable<User> Get()
        {
            return _dataContext.users;
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public User Get(string id)
        {
            var user = _dataContext.users.Find(x => x.UserId == id);
            return user;
        }

        // POST api/<UserController>
        [HttpPost]
        public void Post([FromBody] User value)
        {
            _dataContext.users.Add(value);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody] User value)
        {
            var index = _dataContext.users.Find(x => x.UserId == id);
            index.Name = value.Name;
            index.Address = value.Address;
            index.Mail = value.Mail;
            index.Password = value.Password;

        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            var index=_dataContext.users.Find(x => x.UserId == id);

            _dataContext.users.Remove(index);
        }
    }
}
