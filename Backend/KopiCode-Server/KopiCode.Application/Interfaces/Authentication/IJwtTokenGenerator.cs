using KopiCode.Domain.Entities;

namespace KopiCode.Application.Interfaces.Authentication;

public interface IJwtTokenGenerator
{
    string GenerateToken(User user);
    string GenerateLoginToken(User user);
}
