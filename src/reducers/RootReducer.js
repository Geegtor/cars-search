import { combineReducers } from "redux";
import CarsListReducer from './CarsListReducer';

const RootReducer = combineReducers({
    CarsList: CarsListReducer
});

export default RootReducer;