using Microsoft.AspNetCore.Mvc;
using MoviesAPI.Data;

namespace MoviesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private JoelHiltonMovieCollectionContext context;
        public MovieController(JoelHiltonMovieCollectionContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            return context.Movies
                .Where(x => x.Edited =="Yes")
                .OrderBy(m => m.Title)
                .ToArray();
        }
    }
}
