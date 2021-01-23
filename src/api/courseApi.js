
import { domain } from "../core/api"
export default {
    related: (slug) => {
        return fetch(`${domain}/elearning/v4/course-related/${slug}`).then(res => res.json())
    }
}