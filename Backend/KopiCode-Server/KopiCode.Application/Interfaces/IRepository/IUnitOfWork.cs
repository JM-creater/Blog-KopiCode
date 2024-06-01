namespace KopiCode.Application.Interfaces.IRepository;

public interface IUnitOfWork
{
    Task Save(CancellationToken cancellationToken);
}
