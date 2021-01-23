import { domain } from "../core/api"

export default {
    login: (data) => {
        return fetch(`${domain}/elearning/v4/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer [Token]'
            }
        }).then(res => res.json())
    },
    profile: () => {

        let user = JSON.parse(localStorage.getItem('login'))
        return fetch(`${domain}/elearning/v4/profile`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token.accessToken}`
            }
        }).then(res => res.json())
    },
    course: () => {
        let user = JSON.parse(localStorage.getItem('login'))
        return fetch(`${domain}/elearning/v4/profile/course`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token.accessToken}`
            }
        }).then(res => res.json())
    },
    update: () => { },
    payment: () => { },
}