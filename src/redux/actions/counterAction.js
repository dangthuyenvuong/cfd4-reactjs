import { COUNT_INCREMENT, COUNT_DECREMENT } from './type'
export function incrementAction(data) {
    return {
        type: COUNT_INCREMENT,
        payload: data
    }
}
export function decrementAction() {
    return {
        type: COUNT_DECREMENT
    }
}