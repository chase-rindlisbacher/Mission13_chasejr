import { useState } from 'react';
import data from "./MovieData.json";

const moviesampledata = data.MovieData;

function MovieList() {
    const [listOMovies, setListOMovies] = useState(moviesampledata);
    // const addMovie = () => {
    //     setListOMovies(
    //         [
    //             ...moviesampledata,
    //             {
    //                 "Category": "Action/Adventure",
    //                 "Title": "Batman Returns",
    //                 "Year": 1992,
    //                 "Director": "Tim Burton",
    //                 "Rating": "PG-13"
    //             }
    //         ]
    //     )
    // };
    return(
        <>
            <div>
                <h3>Joel Hilton's Movie Collection</h3>
            </div>

            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Director</th>
                            <th>Rating</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listOMovies.map((m) => (
                            <tr>
                                <td>{m.Title}</td>
                                <td>{m.Year}</td>
                                <td>{m.Director}</td>
                                <td>{m.Rating}</td>
                                <td>{m.Category}</td>
                            </tr>
                        ))}           
                    </tbody>
                </table>
                {/* <button className="btn btn-primary" onClick={addMovie}>Add Movie</button> */}
            </div>
        </>
    );
}

export default MovieList;