import React, { Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import { ErrorMessage, Field, Formik, errors } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Container from "react-bootstrap/Container";

const Login = () => {
  const handleLogin = (values) => {
    const body = {
      email: values.mail,
      password: values.password,
    };
    axios.post("http://challenge-react.alkemy.org/", body).then((response) => {
      localStorage.setItem("token", response.data.token);
    });
  };

  const startValues = {
    mail: "",
    password: "",
  };

  return (
    <Formik
      initialValues={startValues}
      validationSchema={Yup.object().shape({
        mail: Yup.string().required("Campo Requerido"),
        password: Yup.string()
          .min(5, "minimo 5 caracteres")
          .max(8, "maximo 8 caracteres")
          .required("Campo Requerido"),
      })}
      onSubmit={(values) => {
        handleLogin(values);
      }}
    >
      {({ errors, handleSubmit }) => (
        <Fragment>
          <Form className="formulary" onSubmit={handleSubmit}>
            <h1 className="title">Login</h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label">Email</Form.Label>
              <Field
                className="form-control"
                type="email"
                placeholder="Enter email"
                name="mail"
              />
              <ErrorMessage
                name="mail"
                component={() => (
                  <div class="alert alert-danger" role="alert">
                    {errors.mail}
                  </div>
                )}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="label">Password</Form.Label>
              <Field
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
              />
              <ErrorMessage
                name="password"
                component={() => (
                  <div class="alert alert-danger" role="alert">
                    {errors.password}
                  </div>
                )}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Fragment>
      )}
    </Formik>
  );
};

export default Login;
