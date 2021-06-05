import axios from "axios";

export const GetCarsList = (page) => async dispatch => {
    try {
        dispatch({
            type: "CARS_LIST_LOADING"
        });

        const perPage = 15;
        const res = await axios.get(`http://localhost:3004/?_page=${page}&_limit=${perPage}`);
        
        dispatch({
            type: "CARS_LIST_SUCCESS",
            payload: res.data
        })
    }

    catch (e) {
        dispatch({
            type: "CARS_LIST_FAIL"
        })
    }
}