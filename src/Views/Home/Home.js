import React from 'react'

import { Button, Col, Container, Row, Card, Accordion } from 'react-bootstrap'
 
import heroimage2 from '../../Assets/Images/img_service.svg'
import heroimage from '../../Assets/Images/img_car.svg'
import centang from '../../Assets/Images/centang.svg'
import complete from '../../Assets/Images/icon_complete.svg'
import hr from '../../Assets/Images/icon_24hrs.svg'
import professional from '../../Assets/Images/icon_professional.svg'
import price from '../../Assets/Images/icon_price.svg'
import NavibarHome from '../../Components/NavibarHome/NavibarHome'
import Footer from '../../Components/Footer/Footer'
import { SearchBar } from '../../Components/SearchBar/SearchBar'
import style from './home.module.css'
import HeroSect from '../../Components/HeroSect/HeroSect'



export const Home = ({ view }) => {

    const Homepage = () => {
    return (
        <>
     
            <section id='hero' className={style.header}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2 className={style.herotitle}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
                        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        <Button variant='success'className='text-white' href='/search'>Mulai Sewa Mobil</Button>
                    </Col>
                    <Col md={6}>
                        <img src={heroimage} className={style.heroimage} />
                    </Col>
                </Row>
            </Container>
            </section>

            <section id='hero2'>
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={heroimage2} className={style.heroimage2} />
                    </Col>
                    <Col md={6}>
                        <ul className={style.herotitle2}>
                            <li><h4 className='mb-4'><strong>Best Car Rental for any kind of trip in (Lokasimu)!</strong></h4>
                                <li>
                                <p className='mb-3'>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p></li>
                            </li>
                            <li><img src={centang} className={style.centang}/>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                            <li><img src={centang} className={style.centang}/>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                            <li><img src={centang} className={style.centang}/>Sewa Mobil Jangka Panjang Bulanan</li>
                            <li><img src={centang} className={style.centang}/>Gratis Antar - Jemput Mobil di Bandara</li>
                            <li><img src={centang} className={style.centang}/>Layanan Airport Transfer / Drop In Out</li>
                        </ul>
                    </Col>
                </Row>

                <Row className={style.whyus}>
                    <Col md={12}>
                        <h5><strong>Why Us?</strong></h5>
                        <p>Mengapa Harus Binar Car Rental?</p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col md={3} className={'justify-items-center align-items-center'} >
                        <Card style={{ width: '16rem' }, {height: '13rem'}}  className={style.card__}>
                            <Card.Body>
                                <img src={complete} className={'py-2'} />
                                <Card.Title>Mobil Lengkap</Card.Title>
                                <Card.Text>
                                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ width: '16rem' },  {height: '13rem'}} className={style.card__}>
                            <Card.Body>
                                <img src={price} className={'py-2'} />
                                <Card.Title>Harga Murah</Card.Title>
                                <Card.Text>
                                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ width: '16rem' }, {height: '13rem'}}  className={style.card__}>
                            <Card.Body>
                                <img src={hr} className={'py-2'} />
                                <Card.Title>Layanan 24 Jam</Card.Title>
                                <Card.Text>
                                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ width: '16rem' }, {height: '13rem'}} className={style.card__}>
                            <Card.Body>
                                <img src={professional} className={'py-2'} />
                                <Card.Title>Sopir Profesional</Card.Title>
                                <Card.Text>
                                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>


            </Container>
            </section>

            <section id="Testimonial-Homepage" className={'pt-3 pb-3 '}>
                        <Container>
                            <Row>
                                <Col md={12} className={'pt-lg-3 pb-lg-3 '}>
                                    <h3 className={'text-center '}>Testimonial</h3>
                                </Col>
                                <Col md={12} className={'pt-3 pb-3 '}>
                                    Testimonial
                                </Col>
                            </Row>
                        </Container>
            </section>
            <section id="CTABanner-Homepage" className={'pt-3 pb-3 '}>
                        <Container>
                            <Row className={'pt-3 pb-3'}>
                                <Col md={12}>
                                    <Card className={'text-center pt-5 pb-5 pe-3 ps-3 ' + style.card_cta}>
                                        <Card.Body>
                                            <Card.Title><h1 className={'mb-3 '} style={{ color: 'white' }}>Sewa Mobil di (Lokasimu) Sekarang</h1></Card.Title>
                                            <Card.Text style={{ color: 'white' }} className={'mb-5 '}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.
                                            </Card.Text>
                                            <a href="/search"><Button variant='success'>Mulai Sewa Mobil</Button></a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
            </section>

            <section id="faq" className={'pt-3 pb-3 '}>
                <Container>
                        <Row className={'pt-3 pb-3 '}>
                            <Col md={5}>
                                    <h3 className={'text-center text-md-start '}>Frequently Asked Question</h3>
                                    <p className={'text-center text-md-start '}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </Col>
                            <Col md={7} >
                                    <Accordion className={style}>
                                        <Accordion.Item className={'mb-3 '} eventKey="0">
                                            <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion>
                                        <Accordion.Item className={'mb-3 '} eventKey="1">
                                            <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion>
                                        <Accordion.Item className={'mb-3 '} eventKey="2">
                                            <Accordion.Header>Sebaiknya berapa hari sebelumnya untuk booking sewa mobil?</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion>
                                        <Accordion.Item className={'mb-3 '} eventKey="3">
                                            <Accordion.Header>Apakah ada biaya antar-jemput?</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion>
                                        <Accordion.Item className={'mb-3 '} eventKey="4">
                                            <Accordion.Header>Bagaimana jika terjadi kecelakaan?</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>

        )
    }

    const SearchPage = () => {
        return (
            <>
            <section className={style.header}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <HeroSect />                   
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col md={12}>
                            <SearchBar view='detail'/>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            </>
            
        )
    }

    return (
        <div>
            <section id="Navbar-Homepage">
                <NavibarHome />
            </section>
            {view === "homepage" ? Homepage() : null}
            {view === "search" ? SearchPage() : null}
            <section id="Footer-Homepage">
                <Footer />
            </section>
        </div>
    )
}

