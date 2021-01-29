import { COUNT_DECREMENT, COUNT_INCREMENT } from "../actions/type";

export default function counterReducer(state = 10, action) {
    switch (action.type) {
        case COUNT_INCREMENT:
            return state + (action.payload || 1);
        case COUNT_DECREMENT:
            return state - 1;
        default:
            return state;
    }
}