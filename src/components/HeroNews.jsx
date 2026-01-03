import { Card, Button, Badge } from 'react-bootstrap';

const HeroNews = ({ news }) => {
    if (!news) return null;

    return (
        <Card className="bg-dark text-white border-0 shadow mb-5 overflow-hidden">
            <div style={{ position: 'relative', height: '400px' }}>
                <Card.Img
                    src={news.image}
                    alt={news.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.8
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.1))'
                    }}
                />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end p-4 p-md-5">
                    <Badge bg="danger" className="align-self-start mb-2 px-3 py-2">Berita Utama</Badge>
                    <Card.Title className="display-5 fw-bold">{news.title}</Card.Title>
                    <Card.Text className="lead d-none d-md-block" style={{ maxWidth: '800px' }}>
                        {news.description}
                    </Card.Text>
                    <div className="mt-3">
                        <small className="text-light me-3 opacity-75">{news.date}</small>
                        <Button variant="primary" size="lg">Baca Selengkapnya</Button>
                    </div>
                </Card.ImgOverlay>
            </div>
        </Card>
    );
};

export default HeroNews;
