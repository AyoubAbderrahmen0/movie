import { Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import ReactStars from 'react-stars'


function Navb(props) {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default" >
            Search
          </InputGroup.Text>
          <Form.Control
            onChange={(e) => props.setSearch(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <ReactStars
          count={5}
          size={24}
          value={props.rating}
          onChange={(newRating) => props.setRating(newRating)}
          color2={'#ffd700'} />
      </Container>
    </Navbar>
  );
}

export default Navb;