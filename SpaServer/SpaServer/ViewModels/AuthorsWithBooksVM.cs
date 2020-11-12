using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpaServer.ViewModels
{
  public class AuthorsWithBooksVM
  {
    private string AuthorName { get; set; }
    public List<string> BookNameList { get; set; }
  }
}
