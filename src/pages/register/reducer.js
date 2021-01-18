
export default function Reducer(state, action) {
    switch (action.type) {
        case 'FORM_INPUT_CHANGE':
            return {
                ...state,
                form: action.form
            }
        case 'LOADING':
            return {
                ...state,
                loading: action.loading
            }
        case 'ERROR':
            return {
                ...state,
                error: action.error
            }
        case 'BTN_REGISTER_CLICK':
            if (state.loading) {
                alert('Ban khong the gui lien tuc')
                return state;
            }
            let error = {}
            if (!state.form.username) {
                error['username'] = 'Username khong duoc de trong'
            }


            if (!state.form.email) {
                error['email'] = 'Email khong duoc de trong'
            } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(state.form.email)) {
                error['email'] = 'Email khong dung dinh dang'
            }

            if (!state.form.fb) {
                error['fb'] = 'FB khong duoc de trong'
            } else if (!/https?:\/\/(www\.)?facebook.com\/[-a-zA-Z0-9@:%._\+~#=]{1,256}/.test(state.form.fb)) {
                error['fb'] = 'fb khong dung dinh dang'
            }

            if (!state.form.phone) {
                error['phone'] = 'Phone khong duoc de trong'
            } else if (!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(state.form.phone)) {
                error['phone'] = 'Phone khong dung dinh dang'

            }

            if (Object.keys(error).length === 0) {
                action.successCallback();
            }
            return {
                ...state,
                error,
            }

    }

    return state;
}