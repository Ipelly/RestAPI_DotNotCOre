using AutoMapper;
using EdApp.API.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EdApp.API.Profiles
{
    public class AuctionProfile : Profile
    {
        public AuctionProfile()
        {
            CreateMap<Entities.Auction, Models.AuctionDto>()
                .ForMember(
                    dest => dest.Name,
                    opt => opt.MapFrom(src => $"{src.Name}"))
                .ForMember(
                    dest => dest.DayLeft,
                    opt => opt.MapFrom(src => src.EndDate.Subtract(src.StartDate).Days));

            CreateMap<Models.AuctionDtoForCreate, Entities.Auction>();
        }
    }
}
