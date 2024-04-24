import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { dataNavbar } from "../data/index";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const NavbarsComponent = () => {
  const [changeColor, setchangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setchangeColor(true);
    } else {
      setchangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container fluid>
        <Navbar.Brand className="banner">RAFI OFFICIAL</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto mx-auto my-2 my-lg-0 text-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {dataNavbar.map((link) => {
              return (
                <div className="nav-link" key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    end
                  >
                    {link.text}
                  </NavLink>
                </div>
              );
            })}
          </Nav>
          <Form className="d-flex me-4">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
            <Button className="butt" variant="outline-dark">
              Login
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarsComponent;
