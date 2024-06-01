namespace KopiCode.Application.Interfaces.Providers;

public interface IDateTimeProvider
{
    DateTime UtcNow { get; }
}