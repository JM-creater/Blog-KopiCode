using KopiCode.Domain.BaseDomain;
using KopiCode.Domain.Common.Enum;

namespace KopiCode.Domain.Entities;

public class User : BaseEntity
{
    public User(
        Guid id,
        string firstName,
        string lastName,
        string email,
        string password,
        bool termCondition,
        bool isActive,
        UserRole role)
    {
        Id = id;
        FirstName = firstName;
        LastName = lastName;
        Email = email;
        Password = password;
        TermCondition = termCondition;
        IsActive = isActive;
        Role = role;
    }

    public string FirstName { get; private set; }
    public string LastName { get; private set; }
    public string Email { get; private set; }
    public string Password { get; private set; }
    public bool TermCondition { get; private set; }
    public bool IsActive { get; private set; }
    public UserRole Role { get; private set; }
}

