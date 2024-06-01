using KopiCode.Application;
using KopiCode.Infrastructure;
using KopiCode.WebAPI;
using KopiCode.WebAPI.Common.Errors;
using KopiCode.WebAPI.Common.Policy;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddCompression()
                    .AddPresentation()
                    .AddApplication()
                    .AddInfrastructure(builder.Configuration)
                    .AddCorsPolicy();
}

var app = builder.Build();
{
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseMiddleware<ExceptionHandlingMiddleware>();

    //app.MapHealthChecks("/health");

    app.UseHttpsRedirection();

    app.UseCors();

    app.UseAuthorization();

    app.MapControllers();

    app.Run();
};
