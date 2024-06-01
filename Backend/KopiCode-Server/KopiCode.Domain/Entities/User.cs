using KopiCode.Domain.BaseDomain;
using KopiCode.Domain.Common.Enum;
using System.ComponentModel.DataAnnotations;

namespace KopiCode.Domain.Entities;

public class User : BaseEntity
{
    public User(
        Guid id,
        string fullName,
        string email,
        string password,
        bool termCondition,
        bool isActive,
        UserRole role)
    {
        Id = id;
        FullName = fullName;
        Email = email;
        Password = password;
        TermCondition = termCondition;
        IsActive = isActive;
        Role = role;
    }

    [StringLength(50)]
    public string FullName { get; private set; }
    [StringLength(50)]
    public string Email { get; private set; }
    [StringLength(12)]
    public string Password { get; private set; }
    public bool TermCondition { get; private set; }
    public bool IsActive { get; private set; }
    public UserRole Role { get; private set; }
}

