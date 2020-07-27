import React, { useEffect } from 'react';
import { navigate } from "gatsby"
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Formik } from 'formik';
import axios from 'axios'

import authStyle from '../styles/auth.module.css';
import { setUser, isLoggedIn } from '../services/token';

export interface Props {}

const SignIn = () => {

  const makeLogin = async(params) => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/users/token/', params);
      await setUser(res.data.token);
      navigate('/app/dashboard');
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Container className={authStyle.container}>
      <Row className="d-flex flex-grow-1 align-items-center justify-content-center">
        <Col className="col-4">
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              makeLogin(values);
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {props => (
              <Form onSubmit={props.handleSubmit}>
                <h2>Sign In</h2>
                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input id="email" type="email" placeholder="Email" onChange={props.handleChange} value={props.values.email} />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input id="password" type="password"  placeholder="Password" onChange={props.handleChange} value={props.values.password} />
                </FormGroup>
                <Button block color="primary">Submit</Button>
              </Form>
          )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
