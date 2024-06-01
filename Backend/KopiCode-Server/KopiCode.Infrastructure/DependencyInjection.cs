using KopiCode.Application.Interfaces.Authentication;
using KopiCode.Application.Interfaces.ErrorControl;
using KopiCode.Application.Interfaces.IRepository;
using KopiCode.Application.Interfaces.Persistence;
using KopiCode.Application.Interfaces.Providers;
using KopiCode.Infrastructure.Common.Authentication;
using KopiCode.Infrastructure.Common.ErrorControl;
using KopiCode.Infrastructure.Common.Persistence;
using KopiCode.Infrastructure.Common.Providers;
using KopiCode.Infrastructure.Common.Repository;
using KopiCode.Infrastructure.Connection;
using KopiCode.Infrastructure.Context;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace KopiCode.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(
       this IServiceCollection services,
       ConfigurationManager configuration)
    {
        //services.AddIdentity<User, IdentityRole>()
        //        .AddEntityFrameworkStores<KopiCodeContext>()
        //        .AddDefaultTokenProviders();

        services.AddAuth(configuration);

        services.AddDbStorage(configuration);

        services.AddSingleton<IDateTimeProvider, DateTimeProvider>();

        services.AddScoped<IUserRepository, UserRepository>();

        services.AddScoped<IUnitOfWork, UnitOfWork>();

        services.AddScoped<IExceptionConfiguration, ExceptionConfiguration>();

        services.AddScoped<IPasswordEncryption, PasswordEncryption>();

        return services;
    }

    public static IServiceCollection AddAuth(
       this IServiceCollection services,
       ConfigurationManager configuration)
    {
        var JwtSettings = new JwtSettings();

        configuration.Bind(JwtSettings.SectionName, JwtSettings);

        services.AddSingleton(Options.Create(JwtSettings));

        services.AddSingleton<IJwtTokenGenerator, JwtTokenGenerator>();

        services.AddAuthentication(defaultScheme: JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options => options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = JwtSettings.Issuer,
                ValidAudience = JwtSettings.Audience,
                IssuerSigningKey = new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(JwtSettings.Secret))
            });

        return services;
    }

    public static IServiceCollection AddDbStorage(
        this IServiceCollection services,
        ConfigurationManager configuration)
    {
        var defaultConnectionString = configuration.GetConnectionString(ConnectionSettings.ConnectionStrings);

        services.AddDbContext<KopiCodeContext>(option => option.UseSqlServer(defaultConnectionString));

        return services;
    }
}
