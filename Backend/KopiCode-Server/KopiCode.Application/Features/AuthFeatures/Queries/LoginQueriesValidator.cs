using FluentValidation;

namespace KopiCode.Application.Features.AuthFeatures.Queries;

public class LoginQueriesValidator : AbstractValidator<LoginQueries>
{
    public LoginQueriesValidator()
    {
        RuleFor(x => x.Email).NotEmpty().WithErrorCode("400");
        RuleFor(x => x.Password).NotEmpty().WithErrorCode("400");
    }
}
