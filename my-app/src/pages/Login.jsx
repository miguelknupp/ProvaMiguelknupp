import React from 'react'
import { useNavigate } from 'react-router-dom'
import Styler from "../styles/Login.module.css"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const Login = () => {
  return (
    <div className={Styler.body}>
        <form action="">

        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

      
        </form>
    </div>
  )
}

export default Login
