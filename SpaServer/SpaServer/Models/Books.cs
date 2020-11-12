using System;
using System.Collections.Generic;

namespace SpaServer.Models
{
    public partial class Books
    {
        public int BookId { get; set; }
        public int AuthorId { get; set; }
        public string Title { get; set; }
    }
}
