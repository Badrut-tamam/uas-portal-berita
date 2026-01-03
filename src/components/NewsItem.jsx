import { Card, Button } from 'react-bootstrap';

const NewsItem = ({ title, description, image, date }) => {
  return (
    <Card className="h-100 shadow-sm border-0 news-card" style={{ transition: 'transform 0.2s' }}>
      <Card.Img variant="top" src={image} style={{ height: '200px', objectFit: 'cover' }} alt={title} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold text-primary">{title}</Card.Title>
        <Card.Text className="text-secondary flex-grow-1">
          {description}
        </Card.Text>
        <div className="mt-3 border-top pt-3 d-flex justify-content-between align-items-center">
          <small className="text-muted fst-italic">{date}</small>
          <Button variant="outline-primary" size="sm">Baca Selengkapnya</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NewsItem;
