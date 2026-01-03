import { Row, Col } from 'react-bootstrap';
import NewsItem from './NewsItem';

const NewsList = () => {
  return (
    <Row>
      <Col md={4}>
        <NewsItem />
      </Col>
      <Col md={4}>
        <NewsItem />
      </Col>
      <Col md={4}>
        <NewsItem />
      </Col>
    </Row>
  );
};

export default NewsList;
