import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const DogCard = ({ dog, isFavorite, toggleFavorite }) => {
  return (
    <Card className="relative">
      <CardMedia component="img" height="140" image={dog.img} alt={dog.name} />
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
        className="absolute top-0 right-0"
        onClick={() => toggleFavorite(dog.id)}
      >
        {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
      </IconButton>
    </Card>
  );
};

export default DogCard;