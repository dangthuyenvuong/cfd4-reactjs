import { domain } from "../core/api"


export default {
    home: () => {
        return fetch(`${domain}/elearing/v4/home`)
            .then(res => res.json())
    },
    course_detail: (slug) => {
        return fetch(`${domain}/elearning/v4/course/${slug}`)
            .then(res => res.json())
    }
}