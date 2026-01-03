import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm sticky-top">
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-4">Portal Berita</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Navbar.Text className="text-white">
            Terpercaya & Aktual
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
