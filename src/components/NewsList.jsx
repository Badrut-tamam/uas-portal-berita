import { Row, Col } from 'react-bootstrap';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => {
  return (
    <Row>
      {news.map((item) => (
        <Col md={4} key={item.id} className="mb-4">
          <NewsItem
            title={item.title}
            description={item.description}
            image={item.image}
            date={item.date}
          />
        </Col>
      ))}
    </Row>
  );
};

export default NewsList;
