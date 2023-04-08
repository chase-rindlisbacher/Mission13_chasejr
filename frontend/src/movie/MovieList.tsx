import { useEffect,useState } from "react";
import { Movie } from "../types/movie";


export function MovieList () {
    const [movieData, setMovieData] = useState<Movie[]>([]);
    useEffect (() =>{
        const fetchMovie = async () => {
            const rsp = await fetch('https://localhost:4000/movie');
            const temp = await rsp.json();
            setMovieData(temp);
    };
    fetchMovie();
    },[]);
    
    
    return (
        <>
            <div className = "row">
                <h4>Joel Hilton's Movies</h4>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Director</th>
                        <th>Year</th>
                        <th>Rating</th>
                        <th>Edited</th>
                        <th>Lent To</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {movieData.map((f) => (
                        <tr key={f.movieId}>
                            <td>{f.title}</td>
                            <td>{f.category}</td>
                            <td>{f.director}</td>
                            <td>{f.year}</td>
                            <td>{f.rating}</td>
                            <td>{f.edited}</td>
                            <td>{f.lentTo}</td>
                            <td>{f.notes}</td>
                        </tr>
                    ))};
                </tbody>
            </table>
        </>
    )
}