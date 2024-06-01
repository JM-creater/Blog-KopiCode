using KopiCode.Contract.Common.Authentication;
using MediatR;

namespace KopiCode.Application.Features.AuthFeatures.Commands;

public sealed record RegisterCommand(
    string FirstName,
    string LastName,
    string Email,
    string Password,
    bool TermCondition) : IRequest<RegisterRequest>;
