using AutoMapper;
using KopiCode.Application.Features.AuthFeatures.Commands;
using KopiCode.Application.Features.AuthFeatures.Queries;
using KopiCode.Contract.Common.Authentication;
using KopiCode.Domain.Common.Enum;
using KopiCode.Domain.Entities;

namespace KopiCode.Application.Common.Mapping;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        // Register
        CreateMap<RegisterCommand, User>()
            .ForMember(dest => dest.Password, opt => opt.Ignore())
            .ConstructUsing(src => new User(
                Guid.NewGuid(),
                src.FullName,
                src.Email,
                src.Password,
                src.TermCondition,
                true,
                UserRole.User 
            ));
        CreateMap<User, RegisterRequest>();

        // Login
        CreateMap<LoginQueries, User>()
            .ConstructUsing(src => new User(
                Guid.NewGuid(),
                string.Empty,
                src.Email,
                string.Empty, 
                true,
                true, 
                UserRole.User
            ));
        CreateMap<User, LoginRequest>();
    }
}
