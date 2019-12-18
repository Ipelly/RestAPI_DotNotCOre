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
    [Route("api/bids")]
    public class BidController : ControllerBase
    {
        private readonly IBidRepository _BidRepository;
        private readonly IMapper _mapper;

        public BidController(IBidRepository BidRepository)
        {
            _BidRepository = BidRepository ??
                throw new ArgumentNullException(nameof(EdAppRepository));
        }

        [HttpGet()]
        public IActionResult GetBids()
        {
            
            var BidsFromRepo = _BidRepository.GetBids();
            //return Ok(_mapper.Map<IEnumerable<BidDto>>(BidsFromRepo));
            return Ok(BidsFromRepo);
        }

        [HttpGet("{BidId}", Name = "GetBid")]
        public IActionResult GetBid(Guid BidId)
        {
            var BidFromRepo = _BidRepository.GetBid(BidId);

            if (BidFromRepo == null)
            {
                return NotFound();
            }
             
            return Ok(BidFromRepo);
        }

        [HttpPost]
        public ActionResult<Bid> CreateBid(Bid Bid)
        {
            //var BidEntity = _mapper.Map<Entities.Bid>(Bid);
            _BidRepository.AddBid(Bid);
            _BidRepository.Save();

            //var BidReturn = _mapper.Map<BidDto>(BidEntity);
            return CreatedAtRoute("GetBid", new { BidId = Bid.Id }, Bid);
        }
    }
}
