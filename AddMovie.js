import React, { useRef } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import ErrorModal from './ErrorModal';


function AddMovie(props) {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  function handleSubmit(event) {
    event.preventDefault();

    if(titleRef.current.value.trim().length < 6 ){
        props.onError({title:"Invalid Input",message:"Title Field Must Contain 6 Characters...!"})
        return;
    }
    else if (openingTextRef.current.value.trim().length < 10){
        props.onError({title:"Invalid Input",message:"Input Field Must Contain 10 Characters...!"})
        return;
    }

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
    // console.log(movie)
  }

  return (
    <Container
      sx={{
        marginTop: (theme) => theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
        
      <form sx={{width: '100%', marginTop:(theme)=>theme.spacing(2)}} onSubmit={handleSubmit}>
      <TextField
          label="title"
          fullWidth
          sx={{mb:'1rem'}}
          inputRef={titleRef}
        />
      <TextField
          label="opening-text"
          fullWidth
          sx={{mb:'1rem'}}
          inputRef={openingTextRef}
        />
      <TextField
          label="date"
          fullWidth
          sx={{mb:'1rem'}}
          inputRef={releaseDateRef}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="button"
        >
          Submit
        </Button>
        </form>
        </Container>
  );
}

export default AddMovie;
