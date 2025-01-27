﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpaServer.Models
{
    public partial class Authors
    {
        public Authors()
        {
            Books = new HashSet<Books>();
        }

        [Key]
        public int AuthorId { get; set; }
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
        public int NumberOfBooks { get; set; }

        [InverseProperty("Author")]
        public virtual ICollection<Books> Books { get; set; }
    }
}
