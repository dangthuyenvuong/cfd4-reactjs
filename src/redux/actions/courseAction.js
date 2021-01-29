import { COURSE_ADD } from "./type";


export function addCourse(data) {
    return {
        type: COURSE_ADD,
        payload: data
    }
}