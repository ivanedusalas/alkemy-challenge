import React from "react";
import { Fragment } from "react";
import { Navigate } from "react-router-dom";

const RoutGuard = (props) => {
  let token = localStorage.getItem("token");

  return <Fragment>{token ? props.children : <Navigate to="/login" />}</Fragment>;
};

export default RoutGuard;
