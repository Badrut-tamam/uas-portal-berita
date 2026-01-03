import { Container } from 'react-bootstrap';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Footer from './components/Footer';

import newsData from './data/newsData';

function App() {
  return (
    <>
      <Header />
      <Container className="mt-4">
        <h2 className="mb-4 text-center">Berita Terkini</h2>
        <NewsList news={newsData} />
      </Container>
      <Footer />
    </>
  )
}

export default App
