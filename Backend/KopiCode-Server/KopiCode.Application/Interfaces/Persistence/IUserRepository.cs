using KopiCode.Domain.Common.Enum;
using KopiCode.Domain.Entities;

namespace KopiCode.Application.Interfaces.Persistence;

public interface IUserRepository
{
    Task<User> RegisterAsync(User user, CancellationToken cancellationToken);
    Task<User> LoginAsync(User user, CancellationToken cancellationToken);
    Task<User?> CheckPasswordLoginAsync(string email, string password);
    Task<User?> CheckEmailLoginAsync(string email);
    Task<User?> GetUserByEmailAsync(string email);
    Task<UserRole?> GetUserRoleByEmailAsync(string email);
}
