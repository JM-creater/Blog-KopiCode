using KopiCode.Contract.Common.Authentication;
using MediatR;

namespace KopiCode.Application.Features.AuthFeatures.Queries;

public sealed record LoginQueries(
    string Email,
    string Password) : IRequest<LoginRequest>;
