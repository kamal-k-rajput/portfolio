import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";
import "font-awesome/css/font-awesome.min.css";
import { Button } from "react-bootstrap";
import resume from "../assets/files/kamal_kishor_rajput.nodejs.pdf";
export const Navbaar = () => {
  return (
    <div className="navbar-container">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        id="navbar"
        className="animate-navbar nav-theme justify-content-between"
      >
        <Container>
          <Navbar.Brand>
            {/* Resume */}
            <Button
              className="m-2"
              variant="success"
              href={resume}
              target="_blank"
            >
              Resume
              <i className="fa fa-download"></i>
            </Button>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link eventKey={2} href="#about">
                About
              </Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link eventKey={2} href="#contact">
                Contact
              </Nav.Link>
              <Nav.Link eventKey={2} href="https://www.kamalkishor.in">
                Update
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
