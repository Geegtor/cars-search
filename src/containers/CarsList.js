import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

const CarsList = () => {
    const dispatch = useDispatch();
    const carsList = useSelector(state => state.CarsList);
    return (
        <div>Automobiles List</div>
    )
}

export default CarsList;