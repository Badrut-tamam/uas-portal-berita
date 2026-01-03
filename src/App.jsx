import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Footer from './components/Footer';
import HeroNews from './components/HeroNews';

import newsData from './data/newsData';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = newsData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Jika sedang mencari, tampilkan semua sebagai list biasa.
  // Jika tidak mencari, ambil item pertama sebagai Hero.
  const isSearching = searchTerm.length > 0;
  const heroItem = !isSearching && filteredNews.length > 0 ? filteredNews[0] : null;
  const listItems = !isSearching ? filteredNews.slice(1) : filteredNews;

  return (
    <>
      <Header onSearch={setSearchTerm} />
      <Container className="mt-4">
        {heroItem && <HeroNews news={heroItem} />}

        <h2 className="mb-4 fw-bold border-bottom pb-2">
          {isSearching ? `Hasil Pencarian: "${searchTerm}"` : 'Berita Terkini'}
        </h2>

        {filteredNews.length > 0 ? (
          <NewsList news={listItems} />
        ) : (
          <p className="text-center text-muted py-5">Tidak ada berita yang ditemukan.</p>
        )}
      </Container>
      <Footer />
    </>
  )
}

export default App
