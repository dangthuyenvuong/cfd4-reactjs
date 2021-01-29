import { USER } from "./type";

export function login(data) {
    return {
        type: USER.LOGIN,
        payload: data
    }
}