import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, Alert, Badge } from "react-bootstrap";
import { ErrorMessage, Field, Formik, errors } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Cards from "../components/Cards";
import { connect } from "react-redux";
import { contadorGood, contadorBad, agregarHeroe } from "../reducers/reducer";
import Grid from "../components/Grid";

const Search = (props) => {
  const [cardHeroes, SetCardHeroes] = useState();

  const handleLogin = (values) => {
    const body = values.search;

    axios
      .get(
        `https://www.superheroapi.com/api.php/10227761695413006/search/${body}`
      )
      .then((res) => {
        SetCardHeroes(res.data);
      });
  };

  const startValues = {
    search: "",
  };

  const addHero = (heroe) => {
    const { dispatch } = props;
    if (props.heroes.length < 7) {
      if (!props.heroes.some((elem) => elem.id === heroe.id)) {
        console.log("hola");
        if (heroe.biography.alignment === "good" && props.contadorGood < 3) {
          dispatch(contadorGood(1));
          dispatch(agregarHeroe(heroe));
        } else if (heroe.biography.alignment === "bad") {
          if (props.contadorBad < 3) {
            dispatch(contadorBad(1));
            dispatch(agregarHeroe(heroe));
          }
        }
      }
    }
  };

  const renderCard = () => {
    if (cardHeroes.error) {
      return (
        <Alert variant="danger">
          <Alert.Heading>{cardHeroes.error}</Alert.Heading>
        </Alert>
      );
    }
    return (
      cardHeroes &&
      cardHeroes.results.map((heroe) => (
        <Cards
          name={heroe.name}
          image={heroe.image.url}
          alignment={heroe.biography.alignment}
          handleAdd={() => {
            addHero(heroe);
          }}
          weight={heroe.appearance.weight[0]}
        ></Cards>
      ))
    );
  };

  // let sumatoriaObjeto = props.heroes.reduce(
  //   function (acumulador, siguienteValor) {
  //     console.log(siguienteValor);
  //     console.log(acumulador.weight)
  //     return {
  //       weight: parseInt(acumulador.weight) + parseInt(siguienteValor.appearance.weight[0])
  //     }
  //   },
  //   { weight: 0 }
  // );
  // console.log(sumatoriaObjeto);
  // let promedioEdad = sumatoriaObjeto.weight / props.heroes.length;
  // console.log(promedioEdad)

  return (
    <Fragment>
      <Formik
        initialValues={startValues}
        validationSchema={Yup.object().shape({
          search: Yup.string()
            .required("Campo Requerido")
            .max(5, "Máximo 5 Caracteres"),
        })}
        onSubmit={(values) => {
          handleLogin(values);
        }}
      >
        {({ errors, handleSubmit }) => (
          <Form className="formulary" onSubmit={handleSubmit}>
            <h1>Elige tus Heroes</h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label"></Form.Label>
              <Field
                className="form-control"
                type="text"
                placeholder="Search"
                name="search"
              />
              <ErrorMessage
                name="search"
                component={() => (
                  <div class="alert alert-danger" role="alert">
                    {errors.search}
                  </div>
                )}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button
                OnClick={() => renderCard()}
                variant="primary"
                type="submit"
              >
                Buscar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <div>{cardHeroes && renderCard()}</div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    heroes: state.heroes,
    contadorGood: state.contadorGood,
    contadorBad: state.contadorBad,
  };
};

export default connect(mapStateToProps)(Search);
