import React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  CardHeader,
  CardActions,
} from "@mui/material";

const ErrorModal = (props) => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
          zIndex: "10",
          background: "rgba(0,0,0,0.75)",
        }}
        onClick={props.onConfirm}
      />
      <Card sx={{zIndex:'100',position:"fixed",top:'20vh',left:'30%',width:'30%'}}>
        <CardHeader title={props.title} sx={{bgcolor:'#1976d2'}}/>
        <CardContent>
          <Typography  fontStyle="italic">{props.message}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={props.onConfirm}>Okay</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ErrorModal;
