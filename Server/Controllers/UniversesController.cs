using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UniversesController : ControllerBase
    {
        private readonly LoreAtlasContext _context;

        public UniversesController(LoreAtlasContext context)
        {
            _context = context;
        }

        // GET: api/Universes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Universe>>> GetUniverses()
        {
            return await _context.Universes.ToListAsync();
        }

        // GET: api/Universes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Universe>> GetUniverse(int id)
        {
            var universe = await _context.Universes.FindAsync(id);

            if (universe == null)
            {
                return NotFound();
            }

            return universe;
        }

        // PUT: api/Universes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUniverse(int id, Universe universe)
        {
            if (id != universe.Id)
            {
                return BadRequest();
            }

            _context.Entry(universe).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UniverseExists(id))
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

        // POST: api/Universes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Universe>> PostUniverse(Universe universe)
        {
            _context.Universes.Add(universe);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUniverse", new { id = universe.Id }, universe);
        }

        // DELETE: api/Universes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUniverse(int id)
        {
            var universe = await _context.Universes.FindAsync(id);
            if (universe == null)
            {
                return NotFound();
            }

            _context.Universes.Remove(universe);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UniverseExists(int id)
        {
            return _context.Universes.Any(e => e.Id == id);
        }
    }
}
