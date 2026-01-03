import { Card, Button } from 'react-bootstrap';

const NewsItem = ({ title, description, image, date }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={image} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <small className="text-muted">{date}</small>
          <Button variant="primary" size="sm">Read More</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NewsItem;
