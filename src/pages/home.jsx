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
  const statList = [
    "intelligence",
    "strength",
    "speed",
    "durability",
    "power",
    "combat",
  ];

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
  const renderPromedy = () => {
    return (
      <div>
        <div>
          <h2>{getMostHigherStat()}</h2>
          {statList.map((stat) => (
            <p>
              {stat} : {getTotalStat(stat)}
            </p>
          ))}
        </div>
        <span>Team Height Promedy: {getAverage(true)}</span>
        <span>Team Weight Promedy: {getAverage()}</span>
      </div>
    );
  };

  const getTotalStat = (stat) => {
    let total = 0;
    props.heroes.forEach((heroe) => {
      let heroeStat = heroe.powerstats[stat];
      total += heroeStat == "null" ? 0 : parseInt(heroeStat);
    });
    return total;
  };

  const getMostHigherStat = () => {
    let higherStat = "";
    let higherStatQuantity = 0;
    for (let index = 0; index < statList.length; index++) {
      const stat = statList[index];
      const statQuantity = getTotalStat(stat);
      if (statQuantity > higherStatQuantity) {
        higherStat = stat;
        higherStatQuantity = statQuantity;
      }
    }
    return higherStat;
  };

  const getAverage = (isHeight = false) => {
    let suma = 0;
    props.heroes.forEach((heroe) => {
      const value = parseInt(
        isHeight ? heroe.appearance.height[1] : heroe.appearance.weight[1]
      );
      suma += value;
    });
    let promedio = suma / props.heroes.length;
    return Math.round(promedio);
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
      <div>{renderPromedy()}</div>
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
