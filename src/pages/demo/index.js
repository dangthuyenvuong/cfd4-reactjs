import React, { useState, useRef, useImperativeHandle } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { incrementAction, decrementAction } from '../../redux/actions/counterAction'

// export default function Demo() {
//     let [count, setCount] = useState(0)
//     let [val, setVal] = useState(1)
//     let inputRef = useRef()
//     let countRef = useRef();



//     function setValue() {
//         // console.log(document.querySelector('.input-step').value)
//         setVal(parseInt(inputRef.current.value))
//     }

//     function setBg() {
//         console.log(countRef.current())
//         // countRef.current.style.background = 'red'
//     }

//     return (
//         <div>
//             <input type="number" className="input-step" ref={inputRef} />
//             <Count3Ref step={10} ref={countRef} />
//             <button onClick={setValue}>set value</button>
//             <button onClick={setBg}>set Background</button>
//         </div>
//     )
// }


// function Count({ step = 1 }, cRef) {

//     let [count, setCount] = useState(0);
//     function increment() {
//         count += step;
//         setCount(count)
//     }

//     function decrement() {
//         count -= step;
//         setCount(count)
//     }
//     return <div >
//         count: {count} <br />
//         <button ref={cRef} onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//     </div>
// }


// const CountRef = React.forwardRef(Count)


// // Level 3



// function Count3({ step = 1 }, cRef) {


//     let [count, setCount] = useState(0);
//     let btnRef = useRef();
//     function increment() {
//         count += step;
//         setCount(count)
//     }

//     function decrement() {
//         count -= step;
//         setCount(count)
//     }

//     useImperativeHandle(
//         cRef,
//         () => {

//             return () => {
//                 btnRef.current.style.background = 'green'
//             }
//         },
//     )

//     return <div >
//         count: {count} <br />
//         <button onClick={increment}>Increment</button>
//         <button ref={btnRef} onClick={decrement}>Decrement</button>
//     </div>
// }


// const Count3Ref = React.forwardRef(Count3)


export default function Demo() {

    const state = useSelector(state => state.counter)
    const dispatch = useDispatch()


    function _increment() {
        dispatch(incrementAction(Math.round(Math.random() * 10 + 1)))
    }
    function _decrement() {
        dispatch(decrementAction())
    }


    function _click() {
        dispatch({ type: 'DECREMENTaaaa' })
    }

    console.log('re-render')
    return (
        <p style={{ height: 500, paddingTop: 100 }}>
            Clicked: <span id="value">{state}</span> times
            <button id="increment" onClick={_increment}>+</button>
            <button id="decrement" onClick={_decrement}>-</button>
            <button id="incrementIfOdd" onClick={_click}>............</button>
            <button id="incrementAsync">Increment async</button>
        </p>
    )
}