using AngularProject.Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public CategoryController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        // GET: api/<CategoryController>
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return _dataContext.categories;
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public Category Get(string id)
        {
            var index = _dataContext.categories.Find(x => x.CategoryId == id);
            return index;
          
        }

        // POST api/<CategoryController>
        [HttpPost]
        public void Post([FromBody] Category value)
        {
            _dataContext.categories.Add(value);
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public void Put(string  id, [FromBody] Category value)
        {
            var index = _dataContext.categories.Find(x => x.CategoryId == id);
            index.Path= value.Path;
            index.Name = value.Name;
           

        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            var index = _dataContext.categories.Find(x => x.CategoryId == id);

            _dataContext.categories.Remove(index);
        }
    }
}
