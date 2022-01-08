import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './photo.css';

const Photo = ({ photo }) => (
  <Card color="pink">
    <Image
      src={photo.img_src}
      alt="Mars's surface"
      style={{ height: "200px" }}
    />
    <Card.Content>
      <Card.Header textAlign="left">
        {photo.rover.name} - {photo.camera.full_name}
      </Card.Header>
      <Card.Meta textAlign="left">{photo.earth_date}</Card.Meta>
    </Card.Content>
    <label>
      <input type="checkbox" />
      <div className="like-btn-svg icon" />
    </label>
  </Card>
);

export default Photo;
