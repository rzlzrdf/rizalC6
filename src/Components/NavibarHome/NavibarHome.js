import React, { useEffect, useState } from 'react'
import { Container, Navbar , Nav, Button} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Logo from '../Images/logo.svg'
import style from './navibar.module.css'


const NavibarHome = () => {

  const user = useSelector (store => store.user.data)
  
 
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
                            { user === null && <Nav.Link className={'my-auto ' + style.nav_link} href="/register"><Button variant='success'>Register</Button></Nav.Link>}
                            { user !== null && <Nav.Link className={'my-auto ' + style.nav_link} href="/"><Button variant='danger'>Logout</Button></Nav.Link> } 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </div>
  )
}

export default NavibarHome