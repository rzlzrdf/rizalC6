import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import heroimage from '../Images/img_car.svg'

import style from './herosect.module.css'

const HeroSect = () => {
  return (
    <>
        <Container className={style.container}>
            <Row>
                <Col md={6}>
                    <h2 className={style.herotitle}><strong>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</strong></h2>
                    <p className={style.herop}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                </Col>
                <Col md={6}>
                    <img src={heroimage} alt="" className={style.heroimage} />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default HeroSect