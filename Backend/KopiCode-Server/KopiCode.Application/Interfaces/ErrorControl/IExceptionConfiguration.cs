using KopiCode.Application.Features.AuthFeatures.Commands;
using KopiCode.Application.Features.AuthFeatures.Queries;

namespace KopiCode.Application.Interfaces.ErrorControl;

public interface IExceptionConfiguration
{
    Task CustomerRegisterValidator(RegisterCommand command);
    Task CustomLoginValidator(LoginQueries queries);
}
