import { COURSE_ADD } from "../actions/type";

let initState = {

}


export default function (state = initState, action) {

    switch (action.type) {
        case COURSE_ADD:
            let { course, courseRelated } = action.payload
            let { slug } = course
            return {
                ...state,
                [slug]: {
                    course, courseRelated
                }
            }

        default:
            return state
    }
}