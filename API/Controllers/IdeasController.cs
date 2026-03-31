using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class IdeasController(AppDbContext context) : BaseAPIController
{
    [HttpGet]
    public async Task<ActionResult<List<Idea>>> GetIdeas()
    {
        return await context.Ideas.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Idea>> GetIdea(string id)
    {
        return await context.Ideas.FindAsync(id) ?? throw new Exception("Idea not found.");
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateIdea(Idea idea)
    {
        context.Ideas.Add(idea);
        await context.SaveChangesAsync();
        return idea.Id;
    }
}
