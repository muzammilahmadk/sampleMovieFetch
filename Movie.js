import React from 'react';

import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const Movie = (props) => {
  return (
    <ListItem sx={{
        bgcolor: '#3700B3',
        borderRadius:'4px',
        padding: '8px',
        marginBottom: '8px',
      }}>
      <ListItemText sx={{textAlign:'center'}}>
        <Typography variant='body1' fontStyle='italic' sx={{
                backgroundColor: '#ffffff',
                borderRadius: '4px',
                padding: '8px',
                marginBottom:'0.2rem',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              }}>{props.title}</Typography>
      <Typography variant='body1' fontWeight='bold' fontStyle='italic' sx={{
                backgroundColor: '#ffffff',
                borderRadius: '4px',
                padding: '8px',
                marginBottom:'0.2rem',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              }}>{props.releaseDate}</Typography>
      <Typography variant='body1' fontStyle='italic' sx={{
                backgroundColor: '#ffffff',
                borderRadius: '4px',
                padding: '8px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              }}>{props.openingText}</Typography>
      </ListItemText>
    </ListItem>
  );
};

export default Movie;
