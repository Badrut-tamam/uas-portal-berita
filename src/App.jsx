import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Footer from './components/Footer';

import newsData from './data/newsData';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = newsData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header onSearch={setSearchTerm} />
      <Container className="mt-4">
        <h2 className="mb-4 text-center">Berita Terkini</h2>
        <NewsList news={filteredNews} />
      </Container>
      <Footer />
    </>
  )
}

export default App
