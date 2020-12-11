using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpaServer
{
  public class BooksDto
  {
    public int BookId { get; set; }
    public string Title { get; set; }
    public string AuthorName { get; set; }
    public int Pages { get; set; }
    public double Price { get; set; }

  }
}
