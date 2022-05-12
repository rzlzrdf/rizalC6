import React, { useEffect, useState } from 'react'
import style from './search.module.css'
import Footer from '../../Components/Footer/Footer'
import NavibarHome from '../../Components/NavibarHome/NavibarHome'
import { SearchBar } from '../../Components/SearchBar/SearchBar'
import { Accordion, Col, Container, Row, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { CardCar } from '../../Components/CardCar/CardCar'

export const Search = ({ view }) => {

    
    const { driver, date, time, passenger, id } = useParams()

    
    const [GetAPI, setGetAPI] = useState(null)

    
    useEffect(() => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'https://rent-cars-api.herokuapp.com/customer/car',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                setGetAPI(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    
    const filterCar = () => {
        return GetAPI?.map((value, index) => {
            if (value.status === false) {
                return (
                    <Col lg={4} md={6} className={'pt-2 pb-2 '} key={index}>
                        <CardCar view="result" id={value.id} image={value.image} name={value.name} price={value.price} category={value.category} createdAt={value.createdAt} />
                    </Col>
                )
            }
        })
    }

    
    const filterDetail = () => {
        return GetAPI?.map((value, index) => {
            if (value.id == id) {
                return (
                    <div key={index} className={style.searchbox_detail}>
                        <CardCar view="detail" id={value.id} image={value.image} name={value.name} price={value.price} category={value.category} createdAt={value.createdAt} />
                    </div>
                )
            }
        })
    }

    
    const viewResult = () => {
        return (
            <section id="Result-Search">
                <Container>
                    <div className={'ms-lg-5 me-lg-5'}>
                        <SearchBar view="edit" driver={driver} date={date} time={time} passenger={passenger} />
                        <Row className={'mt-4 '}>
                            {filterCar()}
                        </Row>
                    </div>
                </Container>
            </section>
        )
    }

    
    const viewDetail = () => {
        return (
            <section id="Detail-Search">
                <Container>
                    <div className={'ms-lg-5 me-lg-5'}>
                        <SearchBar view="disable" />
                        <Row className={'mt-4'}>
                            <Col md={7} className={'mt-3 '}>
                                <div className={'p-4 ' + style.searchbox_detail}>
                                    <h5>Tentang Paket</h5>
                                    Include
                                    <ul className={style.lists}>
                                        <li className={style.text_detail}>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                        <li className={style.text_detail}>Sudah termasuk bensin selama 12 jam</li>
                                        <li className={style.text_detail}>Sudah termasuk Tiket Wisata</li>
                                        <li className={style.text_detail}>Sudah termasuk pajak</li>
                                    </ul>
                                    Exclude
                                    <ul className={style.lists}>
                                        <li className={style.text_detail}>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                        <li className={style.text_detail}>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                        <li className={style.text_detail}>Tidak termasuk akomodasi penginapan</li>
                                    </ul>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item className={style.item_accordion} eventKey="0">
                                            <Accordion.Header className={style.header_accordion}> <h5>Refund, Reschedule, Overtime</h5></Accordion.Header>
                                            <Accordion.Body className={style.body_accordion}>
                                                <ul className={style.lists}>
                                                    <li className={style.text_detail}>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                    <li className={style.text_detail}>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                    <li className={style.text_detail}>Tidak termasuk akomodasi penginapan</li>
                                                    <li className={style.text_detail}>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                    <li className={style.text_detail}>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                    <li className={style.text_detail}>Tidak termasuk akomodasi penginapan</li>
                                                    <li className={style.text_detail}>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                    <li className={style.text_detail}>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                    <li className={style.text_detail}>Tidak termasuk akomodasi penginapan</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </Col>
                            <Col md={5} className={'mt-3 '}>
                                {filterDetail()}
                            </Col>
                            <Col md={12} className={'mt-5 d-flex justify-content-center '}>
                                <Button variant={'success'}>Lanjutkan Pembayaran</Button>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section >
        )
    }

    return (
        <div>
            <section id="Navbar-Search">
                <NavibarHome />
            </section>
            <div className={style.blank_result}></div>
            {view === "result" ? viewResult() : null}
            {view === "detail" ? viewDetail() : null}
            <section id="Footer-Search">
                <Footer />
            </section>
        </div>
    )
}
