import { Table } from "react-bootstrap";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { borrarHeroe, contadorBad, contadorGood } from "../reducers/reducer";
import { Fragment } from "react";
import Grid from "../components/Grid";

const Home = (props) => {
  const navigate = useNavigate();

  const handleDetailClick = (heroe) => {
    navigate(`/detail/${heroe.id}`);
  };

  const handleDeleteClick = (heroe) => {
    const { dispatch } = props;
    dispatch(borrarHeroe(heroe));
    if (heroe.biography.alignment === "good") {
      dispatch(contadorGood(-1));
    } else dispatch(contadorBad(-1));
  };
  const renderPromedy = (data) => {
    let suma = 0;
    let promedio = 0;
    props.heroes.forEach((heroe) => {
      if (!parseInt(heroe.data)) {
        suma += 0;
      } else {
        suma += parseInt(heroe.data);
      }
    });
    return promedio = suma / props.heroes.length;
  };

  const renderHeroes = () =>
    props.heroes && (
      <Table Col md="auto" striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Intelligence</th>
            <th>Strength</th>
            <th>Speed</th>
            <th>Durability</th>
            <th>Power</th>
            <th>Combat</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.heroes.map((heroe) => (
            <tr>
              <td>{heroe.name}</td>
              <td>
                <img width={80} src={heroe.image.url} />
              </td>
              <td>{heroe.powerstats.intelligence}</td>
              <td>{heroe.powerstats.strength}</td>
              <td>{heroe.powerstats.speed}</td>
              <td>{heroe.powerstats.durability}</td>
              <td>{heroe.powerstats.power}</td>
              <td>{heroe.powerstats.combat}</td>
              <td>
                <Button
                  onClick={() => {
                    handleDetailClick(heroe);
                  }}
                  icon={<EyeOutlined />}
                ></Button>
                <Button
                  onClick={() => {
                    handleDeleteClick(heroe);
                  }}
                  icon={<DeleteOutlined />}
                ></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  return (
    <Fragment>
      {/* <Grid promedy={renderPromedy(props.heroes.appearance.weight[0])} /> */}
      <div>{renderHeroes()}</div>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    heroes: state.heroes,
  };
};
export default connect(mapStateToProps)(Home);
// let intelligence= 0
//     let strength= 0
//     let speed= 0
//     let durability= 0
//     let power= 0
//     let combat= 0
