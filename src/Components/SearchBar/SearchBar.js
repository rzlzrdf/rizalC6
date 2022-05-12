import React, { useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import style from './searchbar.module.css'

export const SearchBar = ({ view, driver, date, time, passenger }) => {

    const Navigate = useNavigate()

    // Membuat State untuk menyimpan inputan
    const [InputDriver, setInputDriver] = useState(driver)
    const [InputDate, setInputDate] = useState(date)
    const [InputTime, setInputTime] = useState(time)
    const [InputPassenger, setInputPassenger] = useState(passenger)

    // Untuk menghandle perubahan input
    const handleInput = (e) => {
        if (e.target.name === "driver") {
            setInputDriver(e.target.value)
        } else if (e.target.name === "date") {
            setInputDate(e.target.value)
        } else if (e.target.name === "time") {
            setInputTime(e.target.value)
        } else if (e.target.name === "passenger") {
            setInputPassenger(e.target.value)
        }
    }

    // Untuk menghandle submit
    const handleSubmit = () => {
        if (InputDriver === "Pilih Tipe Driver" || InputDate === null || InputTime === null) {
            alert("Input Kosong")
        } else if (InputDriver === undefined || InputDate === undefined || InputTime === undefined) {
            alert("Input Kosong")
        } else {
            if (InputPassenger === undefined) {
                Navigate("/search/result/driver=" + InputDriver + "&date=" + InputDate + "&time=" + InputTime + "&passenger=" + 0)
            } else {
                Navigate("/search/result/driver=" + InputDriver + "&date=" + InputDate + "&time=" + InputTime + "&passenger=" + InputPassenger)
            }
        }
    }

    // Tampilan Search Active
    const viewSearch = () => {
        return (
            <div>
                <Form className={'p-4 shadow-sm ' + style.searchbox_active}>
                    <Row className={'gap-lg-0 gap-3'}>
                        <Col lg={10} md={12}>
                            <Row>
                                <Col lg={3} md={6} className={'mt-2'}>
                                    <Form.Group>
                                        <Form.Label>Tipe Driver</Form.Label>
                                        <Form.Select type="dropdown" placeholder="Pilih Tipe Driver" name="driver" onChange={(e) => { handleInput(e) }}>
                                            <option>Pilih Tipe Driver</option>
                                            <option value="supir">Dengan Supir</option>
                                            <option value="tanpa-supir">Tanpa Supir(lepas kunci)</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col lg={3} md={6} className={'mt-2'}>
                                    <Form.Group>
                                        <Form.Label>Tanggal</Form.Label>
                                        <Form.Control type="date" placeholder="Pilih Tanggal" name="date" onChange={(e) => { handleInput(e) }} />
                                    </Form.Group>
                                </Col>
                                <Col lg={3} md={6} className={'mt-2'}>
                                    <Form.Group>
                                        <Form.Label>Waktu Jemput/Ambil</Form.Label>
                                        <Form.Control type="time" placeholder="Pilih Waktu" name="time" onChange={(e) => { handleInput(e) }} />
                                    </Form.Group>
                                </Col>
                                <Col lg={3} md={6} className={'mt-2'}>
                                    <Form.Group>
                                        <Form.Label>Jumlah Penumpang</Form.Label>
                                        <Form.Control type="number" placeholder="Jumlah Penumpang" name="passenger" onChange={(e) => { handleInput(e) }} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={2} md={12} className={'mt-auto d-grid gap-2 '}>
                            <Button variant='success' type="submit" onClick={handleSubmit}>
                                Cari Mobil
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }

    //Tampilan Search Edit
    const viewEdit = () => {
        return (
            <div>
                <Form className={'p-4 ' + style.searchbox_edit}>
                    <Row className={'gap-lg-0 gap-3'}>
                        <Col lg={11} md={12}>
                            <Row>
                                <Col lg={3} md={6} className={'mt-2'}>
                                    <Form.Group>
                                        <Form.Label>Tipe Driver</Form.Label>
                                        <Form.Select type="dropdown" placeholder="Pilih Tipe Driver" name="driver" onChange={(e) => { handleInput(e) }} value={InputDriver}>
                                            <option>Pilih Tipe Driver</option>
                                            <option value="supir">Dengan Supir</option>
                                            <option value="tanpa-supir">Tanpa Supir(lepas kunci)</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col lg={3} md={6} className={'mt-2'}>
                                    <Form.Group>
                                        <Form.Label>Tanggal</Form.Label>
                                        <Form.Control type="date" placeholder="Pilih Tanggal" name="date" onChange={(e) => { handleInput(e) }} value={InputDate} />
                                    </Form.Group>
                                </Col>
                                <Col lg={3} md={6} className={'mt-2'}>
                                    <Form.Group>
                                        <Form.Label>Waktu Jemput/Ambil</Form.Label>
                                        <Form.Control type="time" placeholder="Pilih Waktu" name="time" onChange={(e) => { handleInput(e) }} value={InputTime} />
                                    </Form.Group>
                                </Col>
                                <Col lg={3} md={6} className={'mt-2'}>
                                    <Form.Group>
                                        <Form.Label>Jumlah Penumpang</Form.Label>
                                        <Form.Control type="number" placeholder="Jumlah Penumpang" name="passenger" onChange={(e) => { handleInput(e) }} value={InputPassenger} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={1} md={12} className={'mt-auto d-grid gap-2 '}>
                            <Button variant="outline-primary" type="submit" onClick={handleSubmit}>
                                Edit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }

    // Tampilan Search Disable
    const viewDisable = () => {
        return (
            <div>
                <Form className={'p-4 ' + style.searchbox_disable}>
                    <Row className={'gap-lg-0'}>
                        <Col lg={3} md={6} className={'mt-2'}>
                            <Form.Group>
                                <Form.Label>Tipe Driver</Form.Label>
                                <Form.Select type="dropdown" placeholder="Pilih Tipe Driver" name="driver" disabled>
                                    <option>Pilih Tipe Driver</option>
                                    <option value="supir">Dengan Supir</option>
                                    <option value="tanpa-supir">Tanpa Supir(lepas kunci)</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col lg={3} md={6} className={'mt-2'}>
                            <Form.Group>
                                <Form.Label>Tanggal</Form.Label>
                                <Form.Control type="date" placeholder="Pilih Tanggal" name="date" disabled />
                            </Form.Group>
                        </Col>
                        <Col lg={3} md={6} className={'mt-2'}>
                            <Form.Group>
                                <Form.Label>Waktu Jemput/Ambil</Form.Label>
                                <Form.Control type="time" placeholder="Pilih Waktu" name="time" disabled />
                            </Form.Group>
                        </Col>
                        <Col lg={3} md={6} className={'mt-2'}>
                            <Form.Group>
                                <Form.Label>Jumlah Penumpang</Form.Label>
                                <Form.Control type="number" placeholder="Jumlah Penumpang" name="passenger" disabled />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }

    return (
        <div>
            {view === "detail" ? viewSearch() : null}
            {view === "edit" ? viewEdit() : null}
            {view === "disable" ? viewDisable() : null}
        </div>
    )
}
