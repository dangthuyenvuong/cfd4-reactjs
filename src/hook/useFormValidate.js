import { useState } from "react";

let patternEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let patternURL = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g
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
        document.querySelectorAll('.error-input').forEach(e => e.classList.remove('error-input'))
        let { rule, message } = validate;


        let errorObject = {}

        for (let i in rule) {
            let r = rule[i];

            if (r.required) {
                if (!form[i]) {
                    errorObject[i] = message?.[i]?.required || 'Trường này không được để trống'
                    continue
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


            if (r.min && form[i]?.length < r.min) {
                errorObject[i] = message?.[i]?.min || `Trường này phải dài hơn ${r.min} kí tự`
            }

            if (r.max && form[i]?.length > r.max) {
                errorObject[i] = message?.[i]?.max || `Trường này không được dài hơn ${r.max} kí tự`
            }
        }

        for (let i in errorObject) {
            document.querySelector(`[name="${i}"]`).classList.add('error-input')
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