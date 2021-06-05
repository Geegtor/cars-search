const DefaultState = {
    loading: false,
    errorMsg: "",
    data: []
};

const CarsListReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "CARS_LIST_LOADING":
            return {
                ...state,
                loading: true,
            };
        
        case "CARS_LIST_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: "Failed Laoding"
            };
        
        case "CARS_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                errorMsg: "",
                data: action.payload
            };
        default:
            return state
    }
}

export default CarsListReducer;