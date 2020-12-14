using System;
using System.Data;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SpaServer.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SpaServer.Controllers
{
  [Route("api/BooksByAuthor")]
  [ApiController]
  public class BooksByAuthorController : ControllerBase
  {
    private readonly BookDatabaseContext _context;

    public BooksByAuthorController(BookDatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Books/5
    [HttpGet("{AuthID}")]
    public async Task<ActionResult<List<Books>>> GetBooks(int AuthID)
    {
      var books = await _context.Books.Where(data => data.AuthorId == AuthID).OrderBy(data => data.Title).ToListAsync();

      if (books == null)
      {
        return NotFound();
      }

      return books;
    }
  }
}