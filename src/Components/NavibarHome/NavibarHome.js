import React from 'react'
import { Container, Navbar , Nav, Button} from 'react-bootstrap'

import Logo from '../Images/logo.svg'
import style from './navibar.module.css'


const NavibarHome = () => {
  return (
    <div>
        <Navbar className={style.bg_navbar} expand="lg">
                <Container>
                    <Navbar.Brand href="/"><img src={Logo} alt="Binar Car Rental" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className={'ms-auto gap-2 '}>
                            <Nav.Link className={'my-auto ' + style.nav_link} href="#">Our Service</Nav.Link>
                            <Nav.Link className={'my-auto ' + style.nav_link} href="#">Why Us</Nav.Link>
                            <Nav.Link className={'my-auto ' + style.nav_link} href="#">Testimonial</Nav.Link>
                            <Nav.Link className={'my-auto ' + style.nav_link} href="#">FAQ</Nav.Link>
                            <Nav.Link className={'my-auto ' + style.nav_link} href="/register"><Button variant='success'>Register</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </div>
  )
}

export default NavibarHome