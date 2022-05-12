import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import style from './footer.module.css'
import logo from '../Images/logo.svg'
import fb from '../Images/icon_facebook.svg'
import ig from '../Images/icon_instagram.svg'
import twitter from '../Images/icon_twitter.svg'
import mail from '../Images/icon_mail.svg'
import twitch from '../Images/icon_twitch.svg'

const Footer = () => {
  return (
    <>
        <Container>
            <Row>
                <Col md={4}>
                    <ul className={'py-2 ' + style.address}>
                        <li>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
                        <li>binarcarrental@gmail.com</li>
                        <li>081-233-334-808</li>
                    </ul>
                </Col>
                <Col md={2}>
                    <ul className={'py-2 ' +style.nav_footer}>
                        <li><a href='#OurServices'>Our Services</a></li>
                        <li><a href='#WhyUs'>Why Us</a></li>
                        <li><a href='#Testimonial'>Testimonial</a></li>
                        <li><a href='#FAQ'>FAQ</a></li>
                    </ul>
                </Col>
                <Col md={3}>
                    <ul className={'py-2 '+ style.nav_footer}>
                        <li>Connect With Us</li>
                        <li className={style.connect + ' py-2'}><a href='/twitter'><img alt=""  src={fb} className={'mr-1'}/><img alt=""  src={ig}  className={'mx-1'}/><img alt=""  src={twitter} className={'mx-1'}/><img alt=""  src={mail} className={'mx-1'}/><img alt=""  src={twitch} className={'mx-1'}/></a></li>
                    </ul>
                </Col>
                <Col md={3}>
                    <ul className={'py-2 ' + style.nav_footer}>
                        <li><a href='/'>Copyright Binar</a></li>
                        <li><a href='/'><img alt=""  src={logo} className={'py-2'} /></a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Footer