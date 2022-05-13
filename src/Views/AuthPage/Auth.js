import React from 'react'
import { Button, Form } from 'react-bootstrap'
import logo from '../../Assets/Images/logo.svg'


import style from './Auth.module.css'

const Auth = () => {
  return (
    <div id={style.login_container} className={'d-flex '}>
      <div id={style.hero_login}></div>
      <div id={style.login_form}>
        <div className={style.form + ' justify-content-center align-items-center'}>
          <a href="/"><img src={logo} className={style.fill} /></a>
          <h3 className={'fw-bold py-3'}>Welcome Admin BCR</h3>
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
                Sign In
              </Button>
            </div>
          </Form>
          <a href='/register' className={'text-muted text-center fw-lighter'}>Create new account</a>
        </div>
      </div>
    </div>
  )
}

export default Auth