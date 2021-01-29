import { HOME_UPDATE_DATA } from "../actions/type";

let initState = {
    offline: [],
    online: [],
    review: [],
    gallery: [],
    loading: true
}


export default function homeReducer(state = initState, action) {

    switch (action.type) {
        case HOME_UPDATE_DATA:
            return {
                ...state,
                ...action.payload,
                loading: false
            }

        default:
            return state;
    }
}