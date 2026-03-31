using Domain;
using MediatR;
using Persistence;

namespace Application.Ideas.Queries;

public class GetIdeaDetails
{
    public class Query : IRequest<Idea>
    {
        public required string Id { get; set; }
    }
    public class Handler(AppDbContext context) : IRequestHandler<Query, Idea>
    {
        public async Task<Idea> Handle(Query request, CancellationToken cancellationToken)
        {
            return await context.Ideas.FindAsync([request.Id], cancellationToken) ?? throw new Exception("Project not found.");
        }
    }
}
