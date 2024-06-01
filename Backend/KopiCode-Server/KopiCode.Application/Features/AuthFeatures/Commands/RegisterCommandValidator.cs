using FluentValidation;

namespace KopiCode.Application.Features.AuthFeatures.Commands;

public class RegisterCommandValidator : AbstractValidator<RegisterCommand>
{
    public RegisterCommandValidator()
    {
        RuleFor(x => x.FirstName).NotEmpty().WithErrorCode("400");
        RuleFor(x => x.LastName).NotEmpty().WithErrorCode("400");
        RuleFor(x => x.Email).NotEmpty().WithErrorCode("400");
        RuleFor(x => x.Password).NotEmpty().WithErrorCode("400");
        RuleFor(x => x.TermCondition).NotEmpty().WithErrorCode("400");
    }
}
