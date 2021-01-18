import { useState } from "react";

let patternEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let patternURL = /https?:\/\/(www\.)?\/[-a-zA-Z0-9@:%._\+~#=]{1,256}/
let patternPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/


export default function useFormValidate(initialValue, validate) {
    let [form, setForm] = useState(initialValue)

    function inputChange(event) {
        setForm({
            ...form,
            [event.target.getAttribute('name')]: event.target.value
        })
    }
    let [error, setError] = useState({})

    function submit() {
        let { rule, message } = validate;


        let errorObject = {}

        for (let i in rule) {
            let r = rule[i];

            if (r.required) {
                if (!form[i]) {
                    errorObject[i] = message?.[i]?.required || 'Trường này không được để trống'
                }
            }

            if (r.pattern) {

                let pattern = r.pattern
                if (pattern === 'email') pattern = patternEmail
                if (pattern === 'phone') pattern = patternPhone
                if (pattern === 'url') pattern = patternURL

                if (!pattern.test(form[i])) {
                    errorObject[i] = message?.[i]?.pattern || 'Trường này không đúng định dạng yêu cầu'
                }
            }
        }

        setError(errorObject);
        return errorObject
    }


    return {
        form,
        inputChange,
        error,
        submit
    }
}