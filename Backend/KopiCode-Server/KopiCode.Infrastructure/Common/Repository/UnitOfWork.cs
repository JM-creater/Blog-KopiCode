using KopiCode.Application.Interfaces.IRepository;
using KopiCode.Infrastructure.Context;

namespace KopiCode.Infrastructure.Common.Repository;

public class UnitOfWork : IUnitOfWork
{
    private readonly KopiCodeContext _kopiCodeContext;

    public UnitOfWork(KopiCodeContext kopiCodeContext)
    {
        _kopiCodeContext = kopiCodeContext;
    }
    public Task Save(CancellationToken cancellationToken)
    {
        return _kopiCodeContext.SaveChangesAsync(cancellationToken);
    }
}

