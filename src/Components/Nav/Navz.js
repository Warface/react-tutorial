import React, {useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';
import Search from "../Search/Search";

function Navz() {

  const location = useLocation();
  useEffect(() => {}, [location])

  const showSearch = () => {

    if(location.pathname.match("/listusers")){
      return ( 
        <Nav>
          <Search />
        </Nav>
      )
    }
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
            <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link"to="/listusers">List users</Link>
                <Link className="nav-link" to="/counter">Counter</Link>
            </Nav>
            {showSearch()}
      </Container>
    </Navbar>
  );
}

export default Navz;
