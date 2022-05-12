import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import style from './cardcar.module.css'
import IconPeople from '../Images/icon-people.svg'
import IconSetting from '../Images/icon-setting.svg'
import IconCalendar from '../Images/icon-calendar.svg'

export const CardCar = ({ view, id, image, name, price, category, createdAt }) => {

    const changePrice = () => {
        let separator

        let number_string = price.toString(),
            sisa = number_string.length % 3,
            rupiah = number_string.substr(0, sisa),
            ribuan = number_string.substr(sisa).match(/\d{3}/g);

        if (ribuan) {
            separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }

        return rupiah
    }

    const changeCreatedAt = () => {
        return (createdAt.substring(0, 4))
    }

    const changeCategory = () => {
        if (category === "small") {
            return "4"
        } else if (category === "medium") {
            return "7"
        } else if (category === "large") {
            return "9"
        }
    }

    const viewResult = () => {
        return (
            <div className={style.cardcar_box}>
                <Card className={'p-2 '}>
                    <Card.Body>
                        <Card.Img variant="top" src={image} height="170vh" />
                    </Card.Body>
                    <Card.Body>
                        <Card.Title className={'m-0 p-0 mb-1 ' + style.name_cardresult}>{name}</Card.Title>
                        <Card.Text className={'m-0 p-0 mb-1 ' + style.price_cardresult}>{changePrice()}</Card.Text>
                        <Card.Text className={'m-0 p-0 mb-2 ' + style.desc_cardresult}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Card.Text>
                        <div className={'d-flex align-items-center mb-1 ' + style.desc_cardresult}><img alt="" src={IconPeople} width="20px" height="20px" className={'me-2 '} /> {changeCategory()} orang</div>
                        <div className={'d-flex align-items-center mb-1 ' + style.desc_cardresult}><img alt="" src={IconSetting} width="20px" height="20px" className={'me-2 '} /> Manual</div>
                        <div className={'d-flex align-items-center mb-1 ' + style.desc_cardresult}><img alt="" src={IconCalendar} width="20px" height="20px" className={'me-2 '} /> Tahun {changeCreatedAt()}</div>
                        <a href={"../detail/" + id} className={'d-grid gap mt-3 '}><Button variant='success'>Pilih Mobil</Button></a>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    const viewDetail = () => {
        return (
            <div>
                <Card className={'p-2 '}>
                    <Card.Body>
                        <Card.Img variant="top" src={image} height="200vh" />
                    </Card.Body>
                    <Card.Body>
                        <Card.Title className={'m-0 p-0 mb-1 ' + style.name_carddetail}>{name}</Card.Title>
                        <span className={'me-3 ' + style.desc_carddetail}><img alt="" src={IconPeople} width="16px" height="16px" className={'me-1 '} /> {changeCategory()} orang</span>
                        <span className={'me-3 ' + style.desc_carddetail}><img alt="" src={IconSetting} width="16px" height="16px" className={'me-1 '} /> Manual</span>
                        <span className={'me-3 ' + style.desc_carddetail}><img alt="" src={IconCalendar} width="16px" height="16px" className={'me-1 '} /> Tahun {changeCreatedAt()}</span>
                        <hr />
                        <Row>
                            <Col md={6}>
                                Total
                            </Col>
                            <Col md={6}>
                                <Card.Text className={'m-0 p-0 mb-1 text-end ' + style.price_carddetail}>Rp {changePrice()}</Card.Text>
                            </Col>
                        </Row>
                        <a href="#" className={'d-grid gap mt-3 '}><Button variant='success'>Lanjutkan Pembayaran</Button></a>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    return (
        <div>
            {view === "result" ? viewResult() : null}
            {view === "detail" ? viewDetail() : null}
        </div>
    )
}
