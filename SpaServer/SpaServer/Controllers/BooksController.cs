﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SpaServer.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpaServer.Controllers
{
  [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly BookDatabaseContext _context;

        public BooksController(BookDatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Books
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Books>>> GetBooks()
        {

            List<Books> list = new List<Books>();
                list = await _context.Books.ToListAsync();
            return list;
        }

        // GET: api/Books/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BooksDto>> GetBooks(int id)
        {
            Books book = await _context.Books.FindAsync(id);
            Authors author = await _context.Authors.FindAsync(id);

            if (book == null)
                  {
                      return NotFound();
                  }
            BooksDto bookDto = new BooksDto
            {
              BookId = book.BookId,
              Title = book.Title,
              AuthorName = author.Name
            };
            return bookDto;
        }

        // PUT: api/Books/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBooks(int id, Books books)
        {
            if (id != books.BookId)
            {
                return BadRequest();
            }

            _context.Entry(books).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BooksExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Books
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Books>> PostBooks(Books books)
        {
            _context.Books.Add(books);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBooks", new { id = books.BookId }, books);
        }

        // DELETE: api/Books/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Books>> DeleteBooks(int id)
        {
            var books = await _context.Books.FindAsync(id);
            if (books == null)
            {
                return NotFound();
            }

            _context.Books.Remove(books);
            await _context.SaveChangesAsync();

            return books;
        }

        private bool BooksExists(int id)
        {
            return _context.Books.Any(e => e.BookId == id);
        }
    }
}
