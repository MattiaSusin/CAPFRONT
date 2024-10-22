import { useState } from 'react';
import { Navbar, Container, Nav, Button, Image } from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';
import '../Css/TopBar.css'

const TopBarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="topbar-mobile d-lg-none">
      <Navbar fixed="top" className="custom-navbar">
        <Container fluid>
          <Button
            variant="link"
            className="menu-toggle"
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={24} /> : '☰'}
          </Button>
          <Image 
            src="/path/to/your/logo.png" 
            alt="Logo" 
            className="topbar-logo" 
          />
        </Container>
      </Navbar>

      {menuOpen && (
        <div className="custom-menu">
          <Nav className="flex-column align-items-center">
            <Nav.Link href="/" onClick={toggleMenu}>HOME</Nav.Link>
            <Nav.Link href="/loungeBar" onClick={toggleMenu}>LOUNGE BAR</Nav.Link>
            <Nav.Link href="/menu" onClick={toggleMenu}>MENU</Nav.Link>
            <Nav.Link href="/contatti" onClick={toggleMenu}>CONTATTI</Nav.Link>
            <Button 
              href="/prenotazione"
              className="prenota-button mt-3"
              onClick={toggleMenu}
            >
              PRENOTA
            </Button>
          </Nav>
        </div>
      )}
    </div>
  );
};

export default TopBarMobile;