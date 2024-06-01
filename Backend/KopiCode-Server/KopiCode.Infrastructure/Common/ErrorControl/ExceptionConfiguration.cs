using KopiCode.Application.Common.Exceptions;
using KopiCode.Application.Features.AuthFeatures.Commands;
using KopiCode.Application.Features.AuthFeatures.Queries;
using KopiCode.Application.Interfaces.ErrorControl;
using KopiCode.Application.Interfaces.Persistence;

namespace KopiCode.Infrastructure.Common.ErrorControl;

public class ExceptionConfiguration : IExceptionConfiguration
{
    private readonly IUserRepository _userRepository;

    public ExceptionConfiguration(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task CustomerRegisterValidator(RegisterCommand command)
    {
        if (string.IsNullOrWhiteSpace(command.FirstName))
        {
            throw new FirstNameEmptyException();
        }

        if (string.IsNullOrWhiteSpace(command.LastName))
        {
            throw new LastNameEmptyException();
        }

        if (string.IsNullOrWhiteSpace(command.Email))
        {
            throw new EmailEmptyException();
        }

        if (string.IsNullOrWhiteSpace(command.Password))
        {
            throw new PasswordEmptyException();
        }

        if (!command.TermCondition)
        {
            throw new TermConditionEmptyException();
        }

        if (await _userRepository.GetUserByEmailAsync(command.Email) != null)
        {
            throw new EmailExistsException(command.Email);
        }
    }

    public async Task CustomLoginValidator(LoginQueries queries)
    {
        if (string.IsNullOrWhiteSpace(queries.Email))
        {
            throw new EmailEmptyException();
        }

        if (string.IsNullOrWhiteSpace(queries.Password))
        {
            throw new PasswordEmptyException();
        }

        var user = await _userRepository.CheckEmailLoginAsync(queries.Email);

        if (user is null)
        {
            throw new CheckEmailLoginException(queries.Email);
        }
    }
}
