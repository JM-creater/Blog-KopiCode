using KopiCode.Application.Interfaces.Providers;

namespace KopiCode.Infrastructure.Common.Providers;

public class DateTimeProvider : IDateTimeProvider
{
    public DateTime UtcNow => DateTime.UtcNow;
}

