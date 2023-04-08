using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Data
{
    public partial class Movie
    {
        [Key]
        public long? MovieId { get; set; }
        public string? Category { get; set; }
        public string? Title { get; set; }
        public long? Year { get; set; }
        public string? Director { get; set; }
        public string? Rating { get; set; }
        public string? Edited { get; set; }
        public string? LentTo { get; set; }
        public string? Notes { get; set; }
    }
}
