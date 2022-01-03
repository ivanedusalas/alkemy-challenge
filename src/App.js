import "./App.css";
import { BrowserRouter, Route, Routes, Link, Switch } from "react-router-dom";
import RoutGuard from "./components/RoutGuard";
import Home from "./pages/home";
import { Fragment } from "react";
import Detail from "./pages/detail";
import Login from "./pages/login";
import Search from "./pages/search";
import NavBar from "./components/Nav";

function App() {
  return (
    <div>
      <Fragment>
        <BrowserRouter>
          <div>
            <NavBar/>
            <hr />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <RoutGuard>
                    <Home />
                  </RoutGuard>
                }
              />

              <Route exact path="/login" element={<Login />} />
              <Route
                exact
                path="/detail/:id"
                element={
                  <RoutGuard>
                    <Detail />
                  </RoutGuard>
                }
              ></Route>
              <Route
                exact
                path="/search"
                element={
                  <RoutGuard>
                    <Search />
                  </RoutGuard>
                }
              ></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
