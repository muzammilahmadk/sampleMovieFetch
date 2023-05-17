import React from 'react';

import Movie from './Movie';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const MovieList = (props) => {
  return (
    
    <List sx={{bgcolor:'#1976d2',padding:'8px',borderRadius:'4px'}}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </List>
    
  );
};

export default MovieList;