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
    [Route("api/auctions")]
    public class AuctionController : ControllerBase
    {
        private readonly IAuctionRepository _AuctionRepository;
        private readonly IMapper _mapper;

        public AuctionController(IAuctionRepository AuctionRepository)
        {
            _AuctionRepository = AuctionRepository ??
                throw new ArgumentNullException(nameof(EdAppRepository));
        }

        [HttpGet()]
        public IActionResult GetAuctions()
        {
            var auctionsFromRepo = _AuctionRepository.GetAuctions();
            //return Ok(_mapper.Map<IEnumerable<AuctionDto>>(auctionsFromRepo));
            return Ok(auctionsFromRepo);
        }

        [HttpGet("{auctionId}", Name = "GetAuction")]
        public IActionResult GetAuction(Guid auctionId)
        {
            var auctionFromRepo = _AuctionRepository.GetAuction(auctionId);

            if (auctionFromRepo == null)
            {
                return NotFound();
            }
             
            return Ok(auctionFromRepo);
        }

        [HttpPost]
        public ActionResult<Auction> CreateAuction(Auction auction)
        {
            //var auctionEntity = _mapper.Map<Entities.Auction>(auction);
            _AuctionRepository.AddAuction(auction);
            _AuctionRepository.Save();

            //var auctionReturn = _mapper.Map<AuctionDto>(auctionEntity);
            return CreatedAtRoute("GetAuction", new { auctionId = auction.Id }, auction);
        }
    }
}
