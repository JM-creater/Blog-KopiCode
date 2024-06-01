using KopiCode.Application.Interfaces.Abstraction;
using KopiCode.Domain.BaseDomain;
using KopiCode.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace KopiCode.Infrastructure.Common.Abstraction;

public class BaseRepository<T> : IBaseRepository<T> where T : BaseEntity
{
    protected readonly KopiCodeContext _kopiCodeContext;

    public BaseRepository(KopiCodeContext kopiCodeContext)
    {
        _kopiCodeContext = kopiCodeContext;
    }

    public async Task CreateAsync(T entity, CancellationToken cancellationToken)
    {
        await _kopiCodeContext.AddAsync(entity, cancellationToken);
    }

    public async Task UpdateAsync(T entity, CancellationToken cancellationToken)
    {
        _kopiCodeContext.Update(entity);
        await _kopiCodeContext.SaveChangesAsync(cancellationToken);
    }

    public async Task DeleteAsync(T entity, CancellationToken cancellationToken)
    {
        entity.DateDeleted = DateTimeOffset.UtcNow;
        _kopiCodeContext.Update(entity);
        await _kopiCodeContext.SaveChangesAsync(cancellationToken);
    }

    public Task<T> GetAsync(Guid id, CancellationToken cancellationToken)
    {
        return _kopiCodeContext.Set<T>().FirstOrDefaultAsync(x => x.Id == id, cancellationToken);
    }

    public Task<List<T>> GetAllAsync(CancellationToken cancellationToken)
    {
        return _kopiCodeContext.Set<T>().ToListAsync(cancellationToken);
    }
}
