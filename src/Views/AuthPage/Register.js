import React from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import heroauth from '../../Assets/Images/hero-auth.svg'
import logo from '../../Assets/Images/logo.svg'


import style from './Auth.module.css'

const Register = () => {
  return (
    <div id={style.login_container} className={'d-flex '}>
      <div id={style.hero_login}></div>
      <div id={style.login_form}>
        <div className={style.form + ' justify-content-center align-items-center'}>
          <img src={logo} className={style.fill} />
          <h3 className={'fw-bold py-3'}>Create New Account</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Contoh: johndee@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="6+ karakter" />
            </Form.Group>
            <div className="d-grid gap-2 py-3">
              <Button type='submit' className={style.login_button}>
                Register
              </Button>
            </div>
          </Form>
          <a href='/auth' className={'text-muted text-center fw-light'}>Saya punya akun!</a>
        </div>
      </div>
    </div>
  )
}

export default Register