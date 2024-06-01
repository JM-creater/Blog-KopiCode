using KopiCode.Application.Interfaces.Authentication;
using KopiCode.Application.Interfaces.Persistence;
using KopiCode.Domain.Common.Enum;
using KopiCode.Domain.Entities;
using KopiCode.Infrastructure.Common.Abstraction;
using KopiCode.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace KopiCode.Infrastructure.Common.Persistence;

public class UserRepository : BaseRepository<User>, IUserRepository
{
    private readonly IPasswordEncryption _passwordEncryption;

    public UserRepository(KopiCodeContext _kopiCodeContext, IPasswordEncryption passwordEncryption)
       : base(_kopiCodeContext)
    {
        _passwordEncryption = passwordEncryption;
    }

    public async Task<User?> CheckPasswordLoginAsync(string email, string password)
    {
        var user = await _kopiCodeContext.Users.SingleOrDefaultAsync(u => u.Email == email);
        if (user == null)
        {
            return null;
        }

        var isPasswordValid = _passwordEncryption.VerifyPassword(password, user.Password);
        return isPasswordValid ? user : null;
    }


    public async Task<User?> CheckEmailLoginAsync(string email)
    {
        return await _kopiCodeContext.Users.SingleOrDefaultAsync(u => u.Email == email);
    }

    public async Task<User?> GetUserByEmailAsync(string email)
    {
        return await _kopiCodeContext.Users.SingleOrDefaultAsync(u => u.Email == email);
    }

    public async Task<User> RegisterAsync(User user, CancellationToken cancellationToken)
    {
        await _kopiCodeContext.Users.AddAsync(user, cancellationToken);
        await _kopiCodeContext.SaveChangesAsync(cancellationToken);
        return user;
    }

    public async Task<User> LoginAsync(User user, CancellationToken cancellationToken)
    {
        await _kopiCodeContext.SaveChangesAsync(cancellationToken);
        return user;
    }

    public async Task<UserRole?> GetUserRoleByEmailAsync(string email)
    {
        var user = await _kopiCodeContext.Users
                                         .Where(u => u.Email == email)
                                         .Select(u => u.Role)
                                         .FirstOrDefaultAsync();
        return user;
    }
}
