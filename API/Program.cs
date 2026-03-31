using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(opt =>
{
   opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")); 
});
builder.Services.AddCors(); // permet à l'application backend de gérer des requêtes provenant de différents domaines (origins).
// Sans ça, le backend refuserait par défaut les requêtes provenant d’un autre domaine ou port que lui-même (par exemple, le frontend React qui tourne sur localhost:3000).

var app = builder.Build();

// var définir la politique CORS que l'application va appliquer aux requêtes HTTP entrantes.
app.UseCors(x => 
	x.AllowAnyHeader() // Autorise tous les headers HTTP
	.AllowAnyMethod()  // Autorise toutes les méthodes HTTP (GET, POST, PUT, DELETE…)
	.WithOrigins("http://localhost:5173", "https://localhost:5173") // Autorise seulement ces origines
);

app.MapControllers();

app.Run();
