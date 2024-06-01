using AutoMapper;
using KopiCode.Application.Common.Exceptions;
using KopiCode.Application.Interfaces.Authentication;
using KopiCode.Application.Interfaces.ErrorControl;
using KopiCode.Application.Interfaces.IRepository;
using KopiCode.Application.Interfaces.Persistence;
using KopiCode.Contract.Common.Authentication;
using MediatR;

namespace KopiCode.Application.Features.AuthFeatures.Queries;

public class LoginQueriesHandler : IRequestHandler<LoginQueries, LoginRequest>
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;
    private readonly IJwtTokenGenerator _jwtTokenGenerator;
    private readonly IExceptionConfiguration _exceptionConfiguration;

    public LoginQueriesHandler(
        IUnitOfWork unitOfWork,
        IUserRepository userRepository,
        IMapper mapper,
        IJwtTokenGenerator jwtTokenGenerator,
        IExceptionConfiguration exceptionConfiguration)
    {
        _unitOfWork = unitOfWork;
        _userRepository = userRepository;
        _mapper = mapper;
        _jwtTokenGenerator = jwtTokenGenerator;
        _exceptionConfiguration = exceptionConfiguration;
    }

    public async Task<LoginRequest> Handle(LoginQueries queries, CancellationToken cancellationToken)
    {
        await _exceptionConfiguration.CustomLoginValidator(queries);

        var user = await _userRepository.CheckPasswordLoginAsync(queries.Email, queries.Password);

        if (user == null)
        {
            throw new CheckPasswordLoginException(queries.Password);
        }

        var token = _jwtTokenGenerator.GenerateLoginToken(user);
        var login = _mapper.Map<LoginRequest>(user);

        login.Token = token;

        await _unitOfWork.Save(cancellationToken);

        await _userRepository.LoginAsync(user, cancellationToken);

        await _userRepository.GetUserRoleByEmailAsync(login.Email);

        return login;
    }
}
