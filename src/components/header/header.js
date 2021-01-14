import React, { Component } from 'react';
import { Button, Container, Form, FormControl, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { About, Blog, Contacts, Home } from '../../pages';
import planet from '../../planet.png';
import SearchPanel from '../search-panel/search-panel';

export default class Header extends Component {
  render() {
    return (
      <>
      <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img 
                src={planet}
                height="50"
                width="50"
                className="d-inline-block align-top"
                alt="Logo"
            /> Zero waste shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/"> Home </Nav.Link>
              <Nav.Link href="/about"> About us </Nav.Link>
              <Nav.Link href="/contacts"> Contacts </Nav.Link>
              <Nav.Link href="/blog"> Blog </Nav.Link>
            </Nav>
            <Form inline>
              {/* <FormControl
                type="text"
                placeholder="Serch"
                className="mr-sm-2"  
              /> */}
              <SearchPanel />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contacts" component={Contacts}/>
          <Route exact path="/blog" component={Blog}/>
        </Switch>
      </Router>
      </ >
    );
  }
};