import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css';
import TopBanner from "./Top";
import {MovieList} from './movie/MovieList';
import PodcastLink from './Podcast';


function App() {
  return (
    <>
      <Router>
        <div>
          <nav className="nav-bar">
            <button className="btn"><Link to="/">Home</Link> </button>
            <button className="btn"><Link to="/movies">Movie List</Link> </button>
            <button className="btn"><Link to="/podcasts">Podcasts</Link> </button>
          </nav>
          <Routes>
            <Route path="/" Component={TopBanner} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/podcasts" Component={PodcastLink} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
