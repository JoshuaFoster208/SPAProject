﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpaServer.Models
{
  public partial class Books
  {
    [Key]
    public int BookId { get; set; }
    public int AuthorId { get; set; }
    public string Title { get; set; }
    public int Pages { get; set; }
    public double Price { get; set; }

        [ForeignKey(nameof(AuthorId))]
        //[InverseProperty(nameof(Authors.Books))]
        public virtual Authors Author { get; set; }
    }
}
