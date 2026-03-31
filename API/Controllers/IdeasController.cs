using Application.Ideas.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class IdeasController(AppDbContext context, IMediator mediator) : BaseAPIController
{
    [HttpGet]
    public async Task<ActionResult<List<Idea>>> GetIdeas()
    {
        return await mediator.Send(new GetIdeaList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Idea>> GetIdea(string id)
    {
        return await mediator.Send(new GetIdeaDetails.Query{ Id = id });
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateIdea(Idea idea)
    {
        context.Ideas.Add(idea);
        await context.SaveChangesAsync();
        return idea.Id;
    }
}
