const initialState = {
  contadorGood: 0,
  contadorBad: 0,
  heroes: [],
};

const BORRAR_HEROE = "BORRAR/HEROE"

export const borrarHeroe = (heroe) => {
  return {
    type: BORRAR_HEROE,
    payload: heroe,
  };
};

const INCREMENT_GOOD = "CONTADOR/GOOD";

export const contadorGood = (monto) => {
  return {
    type: INCREMENT_GOOD,
    payload: monto,
  };
};

const INCREMENT_BAD = "CONTADOR/BAD";

export const contadorBad = (monto) => {
  return {
    type: INCREMENT_BAD,
    payload: monto,
  };
};

const AGREGAR_HEROE = "HEROE/AGREGAR";

export const agregarHeroe = (hero) => {
  return {
    type: AGREGAR_HEROE,
    payload: hero,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_GOOD:
      return {
        ...state,
        contadorGood: state.contadorGood + action.payload,
      };

    case INCREMENT_BAD:
      return {
        ...state,
        contadorBad: state.contadorBad + action.payload,
      };

    case AGREGAR_HEROE:
      return {
        ...state,
        heroes: [...state.heroes, action.payload],
      };

    case BORRAR_HEROE:
      return {
        ...state,
        heroes: state.heroes.filter((heroe)=> heroe.id !== action.payload.id)
      };

    default:
      return state;
  }
};

export default reducer;
