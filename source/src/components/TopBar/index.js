import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../Home";
import Todos from "../Todos";
import Create from "../Todos/create";
import Update from "../Todos/update";

function TopBar() {
  return (
    <Router>
      <Navbar bg="dark" expand="md" variant="dark">
        <Container>
          <Navbar.Brand href="#home">System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/todos">
                Lista de Todos
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container mt={2}>
        <Switch>
          <Route path="/todos/create">
            <Create />
          </Route>
          <Route path="/todos/:id/update">
            <Update />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default TopBar;
