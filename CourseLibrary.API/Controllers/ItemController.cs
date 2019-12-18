using EdApp.API.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EdApp.API.Controllers
{
    [ApiController]
    [Route("api/items")]
    public class ItemController : ControllerBase
    {
        private readonly IEdAppRepository _EdAppRepository;

        public ItemController(IEdAppRepository EdAppRepository)
        {
            _EdAppRepository = EdAppRepository ??
                throw new ArgumentNullException(nameof(EdAppRepository));
        }

        [HttpGet()]
        public IActionResult GetItems()
        {
            var itemsFromRepo = _EdAppRepository.GetItems();
            return Ok(itemsFromRepo);
        }

        [HttpGet("{itemId}")]
        public IActionResult GetItem(Guid itemId)
        {
            var itemFromRepo = _EdAppRepository.GetItem(itemId);

            if (itemFromRepo == null)
            {
                return NotFound();
            }
             
            return Ok(itemFromRepo);
        }
    }
}
