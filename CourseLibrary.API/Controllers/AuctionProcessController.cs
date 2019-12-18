using AutoMapper;
using EdApp.API.Entities;
using EdApp.API.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EdApp.API.Controllers
{
    [ApiController]
    [Route("api/solditems")]
    public class AuctionProcessController : ControllerBase
    {
        private readonly ISoldItemRepository _SoldItemRepository;
        private readonly IMapper _mapper;

        public AuctionProcessController(ISoldItemRepository SoldItemRepository)
        {
            _SoldItemRepository = SoldItemRepository ??
                throw new ArgumentNullException(nameof(SoldItemRepository));
        }

        [HttpGet()]
        public IActionResult GetSoldItems()
        {
            
            var soldItemsFromRepo = _SoldItemRepository.GetSoldItems();
            return Ok(soldItemsFromRepo);
        }

        [HttpGet("{SoldItemId}", Name = "GetSoldItem")]
        public IActionResult GetSoldItem(Guid SoldItemId)
        {
            var soldItemFromRepo = _SoldItemRepository.GetSoldItem(SoldItemId);

            if (soldItemFromRepo == null)
            {
                return NotFound();
            }
             
            return Ok(soldItemFromRepo);
        }

        [HttpPost]
        public ActionResult<SoldItem> CreateSoldItem(SoldItem SoldItem)
        {
            //var SoldItemEntity = _mapper.Map<Entities.SoldItem>(SoldItem);
            _SoldItemRepository.AddSoldItem(SoldItem);
            _SoldItemRepository.Save();

            //var SoldItemReturn = _mapper.Map<SoldItemDto>(SoldItemEntity);
            return CreatedAtRoute("GetSoldItem", new { SoldItemId = SoldItem.Id }, SoldItem);
        }
    }
}
