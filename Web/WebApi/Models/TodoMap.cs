using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace WebApi.Models
{
    public class TodoMap : IEntityTypeConfiguration<Todo>
    {
        public void Configure(EntityTypeBuilder<Todo> builder)
        {
            builder.ToTable("todos");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id)
                .HasColumnName("id");
            builder.Property(x => x.Description)
                .HasColumnName("description")
                .HasMaxLength(100)
                .IsUnicode(false)
                .IsRequired();
            builder.Property(x => x.Active)
                .HasColumnName("active")
                .IsRequired();
        }

        public static TodoMap Create => new();
    }
}
