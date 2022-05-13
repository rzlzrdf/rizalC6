import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Form } from 'react-bootstrap'
import logo from '../../Assets/Images/logo.svg'


import style from './Auth.module.css'
import axios from 'axios'

const Register = () => {

  const {register, handleSubmit, formState } = useForm()

  const formSubmitHandler = (data) => {
    console.log(data)
    const postData ={
      email: data.user_email,
      password: data.user_password
    }
    axios.post('https://localhost:4000/register', postData)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <div id={style.login_container} className={'d-flex '}>
      <div id={style.hero_login}></div>
      <div id={style.login_form}>
        <div className={style.form + ' justify-content-center align-items-center'}>
          <a href="/"><img src={logo} className={style.fill} /></a>
          <h3 className={'fw-bold py-3'}>Create New Account</h3>
          <Form onSubmit={ handleSubmit(formSubmitHandler) }>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" id="email" type="email" placeholder="Contoh: johndee@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" id="password" type="password" placeholder="6+ karakter" />
            </Form.Group>
            <div className="d-grid gap-2 py-3">
              <Button type='submit' className={style.login_button}>
                Register
              </Button>
            </div>
          </Form>
          <a href='/auth' className={'text-muted text-center fw-lighter'}>I Have Account</a>
        </div>
      </div>
    </div>
  )
}

export default Register