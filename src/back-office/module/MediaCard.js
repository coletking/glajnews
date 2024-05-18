import React from 'react';
import { Card, CardImg, CardBody, CardText } from 'react-bootstrap';
import "../Styles/ViewPost.css"

const MediaCard = ({ mediaType, mediaUrl, title }) => {
let imgSrc
let videoSrc

if (mediaType ===  "image"){
    imgSrc = mediaType
}else if(mediaType ===  "video"){
    videoSrc = mediaType
}

  return (
    <Card className="h-100">
    {imgSrc && (
      <Card.Img variant="top" src={imgSrc} className="h-100" /> 
    )}

    {videoSrc && (
      <Card.Img variant="top" className="h-100">
        <video className="h-100 w-100" controls>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </Card.Img>
    )}

    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Card content text
      </Card.Text>
    </Card.Body>
  </Card>
);

  
};

export default MediaCard;