using FluentValidation;
using KopiCode.Application.Common.Behavior;
using KopiCode.Application.Common.Mapping;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace KopiCode.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddAutoMapper(typeof(AutoMapperProfile));

        services.AddMediatR(Assembly.GetExecutingAssembly());

        services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());

        services.AddScoped(
            typeof(IPipelineBehavior<,>),
            typeof(ValidationBehavior<,>));

        return services;
    }
}
