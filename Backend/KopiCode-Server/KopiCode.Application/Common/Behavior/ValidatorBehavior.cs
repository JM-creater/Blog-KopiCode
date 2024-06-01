using FluentValidation;
using KopiCode.Application.Common.Behavior.Common;
using KopiCode.Application.Common.Exceptions;
using MediatR;

namespace KopiCode.Application.Common.Behavior;

public sealed class ValidationBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
    where TRequest : IRequest<TResponse>
{
    private readonly IEnumerable<IValidator<TRequest>> _validators;

    public ValidationBehavior(IEnumerable<IValidator<TRequest>> validators)
    {
        _validators = validators;
    }

    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
    {
        if (!_validators.Any()) return await next();

        var context = new ValidationContext<TRequest>(request);

        var errors = _validators
            .Select(x => x.Validate(context))
            .SelectMany(x => x.Errors)
            .Where(x => x != null)
            .Distinct()
            .ToList();

        foreach (var failure in errors)
        {
            if (failure.PropertyName == "FullName" && failure.ErrorCode == "400")
            {
                throw new FullNameEmptyException();
            }
            if (failure.PropertyName == "Password" && failure.ErrorCode == "400")
            {
                throw new PasswordEmptyException();
            }
            if (failure.PropertyName == "Email" && failure.ErrorCode == "400")
            {
                throw new EmailEmptyException();
            }
            if (failure.PropertyName == "TermCondition" && failure.ErrorCode == "400")
            {
                throw new TermConditionEmptyException();
            }

        }

        if (errors.Any())
        {
            var errorMessages = errors
                .Select(f => f.ErrorMessage)
                .Distinct()
                .ToArray();
            throw new BadRequestException(errorMessages);
        }

        return await next();
    }
}
