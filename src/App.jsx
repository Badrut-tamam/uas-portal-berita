import { Container } from 'react-bootstrap';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Container className="mt-4">
        <h2 className="mb-4">Berita Terkini</h2>
        <NewsList />
      </Container>
      <Footer />
    </>
  )
}

export default App
