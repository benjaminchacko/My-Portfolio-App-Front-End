import React from 'react';
import { connect } from 'react-redux';
import {Navbar, Nav, Button} from 'react-bootstrap';

class NavBar extends React.Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <React.Fragment>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/blogs">Blogs</Nav.Link>
                </Nav>
                <Nav pullright="true">
                <Nav.Link href="/dashboard"><Button>Dashboard</Button></Nav.Link>
                <Nav.Link href="/signout"><Button>Signout</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </React.Fragment>
      );
    } else {
      return (
      <React.Fragment>
       <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
            </Nav>
              <Nav pullRight="true">
                <Nav.Link href="/signup"><Button>Sign Up</Button></Nav.Link>
                <Nav.Link href="/signin"><Button>Sign In</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderLinks()}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(NavBar);
