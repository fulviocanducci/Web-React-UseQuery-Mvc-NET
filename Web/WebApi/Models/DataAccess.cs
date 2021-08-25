using Microsoft.EntityFrameworkCore;

namespace WebApi.Models
{
    public class DataAccess : DbContext
    {
        public DbSet<Todo> Todo { get; set; }

        public DataAccess(DbContextOptions<DataAccess> option)
            :base(option)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(TodoMap.Create);
        }
    }
}
