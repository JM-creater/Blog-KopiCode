using KopiCode.Application.Common.Exceptions.Base;
using Microsoft.AspNetCore.Http;

namespace KopiCode.Application.Common.Exceptions;

#region Login

public class CheckPasswordLoginException : BaseException
{
    public CheckPasswordLoginException(string password)
        : base($"The password {password} you entered is invalid.", StatusCodes.Status400BadRequest)
    {

    }
}


public class CheckEmailLoginException : BaseException
{
    public CheckEmailLoginException(string email)
        : base($"The email {email} you entered is invalid.", StatusCodes.Status400BadRequest)
    {

    }
}

public class EmailPasswordMismatchException : BaseException
{
    public EmailPasswordMismatchException(string email, string password)
        : base($"The email {email} does not match the password {password}.", StatusCodes.Status409Conflict)
    {

    }
}
#endregion 

#region Register
public class FirstNameEmptyException : BaseException
{
    public FirstNameEmptyException()
        : base("First name cannot be empty.", StatusCodes.Status400BadRequest)
    {
    }
}

public class LastNameEmptyException : BaseException
{
    public LastNameEmptyException()
        : base("Last name cannot be empty.", StatusCodes.Status400BadRequest)
    {
    }
}

public class EmailEmptyException : BaseException
{
    public EmailEmptyException()
        : base("Email cannot be empty.", StatusCodes.Status400BadRequest)
    {
    }
}

public class PasswordEmptyException : BaseException
{
    public PasswordEmptyException()
        : base("Password cannot be empty.", StatusCodes.Status400BadRequest)
    {
    }
}

public class TermConditionEmptyException : BaseException
{
    public TermConditionEmptyException()
        : base("Term & Condition cannot be empty.", StatusCodes.Status400BadRequest)
    {
    }
}

#endregion
