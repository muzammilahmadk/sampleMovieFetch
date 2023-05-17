import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Card,
} from "@mui/material";
import ErrorModal from './components/ErrorModal';

import MoviesList from "./components/MovieList.js";
import "./App.css";
import AddMovie from "./components/AddMovie";


function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErro] = useState();

  const movieHandler = useCallback(async () => {
    setIsLoading(true);
    setErro(null);

    try {
      const response = await fetch(
        "https://sample-aaf6f-default-rtdb.firebaseio.com/Movies.json "
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong......!");
      }
      const data = await response.json();
      const transformedMovies = [];
      for (const key in data) {
        transformedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(transformedMovies);
    } catch (error) {
      setErro({title:"Server Error",message:error.message});
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    movieHandler();
  }, [movieHandler]);

  async function addMovieHandler(movie) {
    try{
    const response = await fetch(
      "https://sample-aaf6f-default-rtdb.firebaseio.com/Movies.json ",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }catch (error) {
  setErro({title:"Network Error", message:error.message});
}
}

  let content = (
    <Typography variant="body1" component="p">
      FOund no Movies
    </Typography>
  );

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  // if (error) {
  //   content = <p>{error}</p>;
  // }
  if (isLoading) {
    content = (
      <Typography variant="body5" component="p">
        Loading.....
      </Typography>
    );
  }

  const setErrorHandler = (error) => {
    setErro(error);
  }
  const errorHandler = ()=> {
    setErro(null);
  }

  return (
    <React.Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Container
        sx={{
          marginTop: (theme) => theme.spacing(4),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AddMovie onAddMovie={addMovieHandler} onError={setErrorHandler}/>
      </Container>
      <Container
        sx={{
          marginTop: (theme) => theme.spacing(4),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="button"
          onClick={movieHandler}
          sx={{mb:'1rem'}}
        >
          Fetch Movies
        </Button>
        <Container>{content}</Container>
      </Container>
    </React.Fragment>
  );
}

export default App;
