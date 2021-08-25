using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Todo
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Digite a descrição")]
        [MaxLength(ErrorMessage = "Até 100 caracteres")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Digite a descrição")]
        public bool Active { get; set; }
    }
}
