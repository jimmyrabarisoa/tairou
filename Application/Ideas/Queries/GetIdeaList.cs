using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Ideas.Queries;

public class GetIdeaList
{
    // Requête : récupérer la liste des idées
    public class Query : IRequest<List<Idea>> {}
    // l'expert qui va s'occuper de la requête => va faire en sorte de récupérer la liste des idées
    public class Handler(AppDbContext context) : IRequestHandler<Query, List<Idea>>
    {
        // la logique pour récupérer la liste des idées (ancienne responsabilité du controleur)
        public async Task<List<Idea>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await context.Ideas.ToListAsync(cancellationToken);
        }
    }
}
