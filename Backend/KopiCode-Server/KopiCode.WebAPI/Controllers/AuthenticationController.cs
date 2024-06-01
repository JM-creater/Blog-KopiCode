﻿using KopiCode.Application.Features.AuthFeatures.Commands;
using KopiCode.Application.Features.AuthFeatures.Queries;
using KopiCode.Contract.Common.Authentication;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KopiCode.WebAPI.Controllers;

[Route("auth")]
[AllowAnonymous]
public class AuthenticationController : ControllerBase
{
    private readonly IMediator _mediator;

    public AuthenticationController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost("register")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<RegisterRequest>> Register(
         [FromForm] RegisterCommand command,
         CancellationToken cancellationToken)
    {
        var response = await _mediator.Send(command, cancellationToken);

        return Ok(response);
    }

    [HttpPost("login")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<LoginRequest>> Login(
         [FromBody] LoginQueries queries,
         CancellationToken cancellationToken)
    {
        var response = await _mediator.Send(queries, cancellationToken);

        return Ok(response);
    }
}
