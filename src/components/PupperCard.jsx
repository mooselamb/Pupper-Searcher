import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const PupperCard = ({ dog, isFavorite, toggleFavorite }) => {
  return (
    <Card
      className="relative shadow-lg transform transition-transform duration-200 hover:scale-105"
      style={{ borderRadius: "15px" }}
    >
      <CardMedia component="img" height="200" image={dog.img} alt={dog.name} />
      <CardContent>
        <Typography variant="h6">{dog.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          Breed: {dog.breed}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Age: {dog.age}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Zip Code: {dog.zip_code}
        </Typography>
      </CardContent>
      <IconButton
        className="absolute top-2 right-2 bg-white bg-opacity-75 rounded-full"
        onClick={() => toggleFavorite(dog.id)}
      >
        {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
      </IconButton>
    </Card>
  );
};

export default PupperCard;
