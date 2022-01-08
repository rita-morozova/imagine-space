import React, { useState, useEffect } from 'react';
import {
  Card,
} from "semantic-ui-react";

import Photo from '../photo/Photo';
import LoadingPage from '../loadingPage/LoadingPage';


const CardsContainer = () => {
  const [photos, setPhotos] = useState(Array.from({length: 2}));
  const [loading, setLoading] = useState(true);

  const fetchPhotos = () => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&limit=10&api_key=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.photos);
        setLoading(!loading);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

 
  return (
    <main>
      <Card.Group centered>
        {loading ? (
          <LoadingPage />
        ) : (
         photos.map((photo) => <Photo key={photo.id} photo={photo} />)
        )}
      </Card.Group>
    </main>
  );
};

export default CardsContainer;
