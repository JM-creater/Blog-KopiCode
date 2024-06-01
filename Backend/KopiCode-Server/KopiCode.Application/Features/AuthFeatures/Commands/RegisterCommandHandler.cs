using AutoMapper;
using KopiCode.Application.Interfaces.Authentication;
using KopiCode.Application.Interfaces.ErrorControl;
using KopiCode.Application.Interfaces.IRepository;
using KopiCode.Application.Interfaces.Persistence;
using KopiCode.Contract.Common.Authentication;
using KopiCode.Domain.Entities;
using KopiCode.Domain.Common.Enum;
using MediatR;

namespace KopiCode.Application.Features.AuthFeatures.Commands;

public class RegisterCommandHandler : IRequestHandler<RegisterCommand, RegisterRequest>
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;
    private readonly IJwtTokenGenerator _jwtTokenGenerator;
    private readonly IExceptionConfiguration _exceptionConfiguration;
    private readonly IPasswordEncryption _passwordEncryption;

    public RegisterCommandHandler(
        IUnitOfWork unitOfWork,
        IUserRepository userRepository,
        IMapper mapper,
        IJwtTokenGenerator jwtTokenGenerator,
        IExceptionConfiguration exceptionConfiguration,
        IPasswordEncryption passwordEncryption)
    {
        _unitOfWork = unitOfWork;
        _userRepository = userRepository;
        _mapper = mapper;
        _jwtTokenGenerator = jwtTokenGenerator;
        _exceptionConfiguration = exceptionConfiguration;
        _passwordEncryption = passwordEncryption;
    }

    public async Task<RegisterRequest> Handle(RegisterCommand command, CancellationToken cancellationToken)
    {
        await _exceptionConfiguration.CustomerRegisterValidator(command);

        var user = _mapper.Map<User>(command);
        var token = _jwtTokenGenerator.GenerateToken(user);
        var register = _mapper.Map<RegisterRequest>(user);
        var hashedPassword = _passwordEncryption.HashPassword(command.Password);

        register.Token = token;
        register.Password = hashedPassword;
        register.Role = UserRole.User;

        await _unitOfWork.Save(cancellationToken);
        await _userRepository.RegisterAsync(user, cancellationToken);

        return register;
    }
}