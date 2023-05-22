import React from 'react'
import{Navbar,Nav,Container} from 'react-bootstrap'
import{LinkContainer} from 'react-router-bootstrap'
import{GiFoodTruck} from'react-icons/gi'
import './navbar.css'

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" varient="dark" expands="lg">
        <Container fluid>
                <img src = 'https://images.vexels.com/media/users/3/199964/isolated/preview/ae782cab8ae7e722febb5869c09574cc-happy-delivery-boy-character-by-vexels.png' alt='logo' className='header-logo'/>
                {/*<GiFoodTruck className="text-dark "/>*/}<h5>Foodee</h5>
            <Nav className='ms-auto'>
                <LinkContainer to = "/homepage" activeClassName>
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to = "/Admin" activeClassName>
                    <Nav.Link>Admin</Nav.Link>
                </LinkContainer>
                <LinkContainer to = "/Accounts" activeClassName>
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to = "/Signup" activeClassName>
                    <Nav.Link>Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to = "/about" activeClassName>
                    <Nav.Link>About Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to = "/Contact" activeClassName>
                    <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
            </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar;
