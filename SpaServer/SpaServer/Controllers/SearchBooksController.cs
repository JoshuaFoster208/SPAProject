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
  [Route("api/SearchBooks")]
  [ApiController]
  public class SearchBooksController : ControllerBase
  {
    private readonly BookDatabaseContext _context;

    public SearchBooksController(BookDatabaseContext context)
    {
      _context = context;
    }

    // GET: api/SearchBooks
    [HttpGet("{name}")]
    public async Task<ActionResult<List<Books>>> GetBooks(string name)
    {
      var books = await _context.Books.Where(data => data.Title.ToLower().Contains(name.ToLower())).Include(e => e.Author).OrderBy(data => data.Title).ToListAsync();

      if (books == null)
      {
        return NotFound();
      }

      return books;
    }
  }
}