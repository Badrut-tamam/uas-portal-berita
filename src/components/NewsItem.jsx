import { Card, Button } from 'react-bootstrap';

const NewsItem = () => {
  return (
    <Card style={{ width: '18rem' }} className="mb-4">
      <Card.Img variant="top" src="https://via.placeholder.com/286x180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default NewsItem;
