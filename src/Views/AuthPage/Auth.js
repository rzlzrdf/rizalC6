import React, {useState} from 'react'
import { useForm  } from 'react-hook-form'
import jwtDecode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import userSlice from '../../store/user'
import { Button, Form } from 'react-bootstrap'
import logo from '../../Assets/Images/logo.svg'


import style from './Auth.module.css'
import axios from 'axios'

const Login = () => {

  const {register, handleSubmit, formState } = useForm()
  const [loginStatus, setLoginStatus] = useState({
    succes: false,
    message: ''
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formSubmitHandler = (data) => {
    const postData = {
      email: data.user_email,
      password: data.user_password,
    }

    axios.post('http://localhost:4000/login', postData)
    .then(res => {
      console.log(res.data)

      if (typeof res.data.accessToken !== 'undefined') {
        localStorage.setItem('userToken', res.data.accessToken)
        const user = jwtDecode(res.data.accessToken)
        axios.get(`http://localhost:4000/user/${user.sub}`)
        .then (res => {
          dispatch(userSlice.actions.addUser({userData: res.data}))
          navigate('/')
        })  
      }
    })
    .catch(err => {
      console.log(err)
      setLoginStatus({
        succes: false,
        message: 'Please input correct password!'
      })
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
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control name="email" id="email" type="email" required placeholder="Contoh: johndee@gmail.com" {...register("user_email")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control name="password" id="password" type="password" required="password" placeholder="6+ karakter" {...register("user_password")} />
            </Form.Group>
            {(!loginStatus.succes && loginStatus.message) && <p className='text-danger fw-italic'>{loginStatus.message}</p>}
            <div className="d-grid gap-2 py-3">
              <Button type='submit' className={style.login_button}>
                Login
              </Button>
            </div>
          </Form>
          <a href='/auth' className={'text-muted text-center fw-lighter'}>I Have an Account</a>
        </div>
      </div>
    </div>
  )
}

export default Login