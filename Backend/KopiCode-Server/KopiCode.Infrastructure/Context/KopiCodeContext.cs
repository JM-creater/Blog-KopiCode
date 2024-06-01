using KopiCode.Domain.Common.Enum;
using KopiCode.Domain.Entities;
using KopiCode.Infrastructure.Common.Authentication;
using Microsoft.EntityFrameworkCore;

namespace KopiCode.Infrastructure.Context;

public class KopiCodeContext : DbContext
{
    public KopiCodeContext(DbContextOptions<KopiCodeContext> options) 
        : base(options)
    {
        Database.EnsureCreated();
    }

    public DbSet<User> Users => Set<User>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var passwordEncryption = new PasswordEncryption();

        foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
        {
            relationship.DeleteBehavior = DeleteBehavior.Restrict;
        }

        modelBuilder.ApplyConfigurationsFromAssembly(typeof(KopiCodeContext).Assembly);

        modelBuilder.Entity<User>().HasData(
            new User(
                id: Guid.NewGuid(),
                firstName: "Admin",
                lastName: "Admin",
                email: "admin@gmail.com",
                password: passwordEncryption.HashPassword("admin123"),
                termCondition: true,
                isActive: true,
                role: UserRole.Admin
            )
        );
    }


}
