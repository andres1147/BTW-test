using Microsoft.EntityFrameworkCore;
using TecnoMarketAPI.Models;

namespace TecnoMarketAPI.Context
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Producto> Producto { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
        }
    }
}
