import { Navbar, Container, Form, FormControl } from 'react-bootstrap';

const Header = ({ onSearch }) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm sticky-top">
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-4">Portal Berita</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Navbar.Text className="text-white d-none d-lg-block">
            Terpercaya & Aktual
          </Navbar.Text>
          <Form className="d-flex mt-3 mt-lg-0">
            <FormControl
              type="search"
              placeholder="Cari berita..."
              className="me-2 rounded-pill"
              aria-label="Search"
              onChange={(e) => onSearch(e.target.value)}
              style={{ width: '300px' }}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
