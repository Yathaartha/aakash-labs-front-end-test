import { FETCH_CURRENCIES, CONNECT_ACCOUNT } from "./types";
import zabo from "../apis/Zabo";

const connectAccount = () => {
  return async (dispatch) => {
    zabo.get("/currencies");
    dispatch({ type: CONNECT_ACCOUNT });
  };
};

const fetchCurrencies = () => {
  return async (dispatch) => {
    const response = await zabo.get("/currencies");
    dispatch({ response, type: FETCH_CURRENCIES });
  };
};

export { fetchCurrencies };
