using KopiCode.Application.Common.Exceptions.Base;
using Microsoft.AspNetCore.Http;

namespace KopiCode.Application.Common.Exceptions;

public class EmailExistsException : BaseException
{
    public EmailExistsException(string email)
        : base($"The email {email} is already registered.", StatusCodes.Status409Conflict)
    {

    }
}
