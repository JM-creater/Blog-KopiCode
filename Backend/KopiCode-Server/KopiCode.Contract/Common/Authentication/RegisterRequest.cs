using KopiCode.Domain.Common.Enum;

namespace KopiCode.Contract.Common.Authentication;

public sealed record RegisterRequest
{
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;
    public bool TermCondition { get; set; }
    public string Token { get; set; } = null!;
    public UserRole Role { get; set; }
}
