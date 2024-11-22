import React from "react";
import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";
import axios from "axios";
import "./App.css";

const initialState = {
  movies: [],
  loading: true,
  error: "",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, movies: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, error: "Failed to fetch data", loading: false };
    case "SEARCH_SUCCESS":
      return { ...state, movies: action.payload };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchMovies("Batman");
  }, []);

  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${query}&apikey=3517f43d`
      );
      if (response.data.Search) {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data.Search });
      } else {
        dispatch({ type: "FETCH_ERROR" });
      }
    } catch {
      dispatch({ type: "FETCH_ERROR" });
    }
  }

  return (
    <div className="App">
      <Header title="Movies List App" onSearch={fetchMovies} />
      <div className="movies-container">
        {state.loading && <p>Loading...</p>}
        {state.error && <p>{state.error}</p>}
        {state.movies.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default App;
