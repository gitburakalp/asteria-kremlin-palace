import {SET_LANG} from "../actions/langActions";


const initialState = {
    payload: []
};

const langReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANG:
            return { ...state, payload: action.payload }
        default:
            return { ...state };
    }
}

export default langReducer;