import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./../logo.svg";

type NavType = {
  name: string;
};
function AppBar(props: NavType) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="App-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">{props.name}</Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default AppBar;
