using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AplicacionCliente.Models
{
    public class Cliente
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage ="Nombres es Requerido")]
        [MaxLength(80)]
        public string Nombres { get; set; }

        [Required(ErrorMessage = "Apellidos es Requerido")]
        [MaxLength(80)]
        public string Apellidos { get; set; }

        [Required(ErrorMessage = "Direccion es Requerido")]
        [MaxLength(100)]
        public string Direccion { get; set; }

        [Required(ErrorMessage = "Telefono es Requerido")]
        [MaxLength(30)]
        public string Telefono { get; set; }

        [Required]
        public bool Estado { get; set; }
    }
}
