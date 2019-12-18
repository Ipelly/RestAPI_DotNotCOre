using EdApp.API.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EdApp.API.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {
        private readonly IEdAppRepository _EdAppRepository;

        public UserController(IEdAppRepository EdAppRepository)
        {
            _EdAppRepository = EdAppRepository ??
                throw new ArgumentNullException(nameof(EdAppRepository));
        }

        [HttpGet()]
        public IActionResult GetUsers()
        {
            var usersFromRepo = _EdAppRepository.GetUsers();
            return Ok(usersFromRepo);
        }

        [HttpGet("{userId}")]
        public IActionResult GetUser(Guid userId)
        {
            var userFromRepo = _EdAppRepository.GetUser(userId);

            if (userFromRepo == null)
            {
                return NotFound();
            }
             
            return Ok(userFromRepo);
        }
    }
}
