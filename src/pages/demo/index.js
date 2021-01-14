import React, { useState, useRef, useImperativeHandle } from 'react'

export default function Demo() {
    let [count, setCount] = useState(0)
    let [val, setVal] = useState(1)
    let inputRef = useRef()
    let countRef = useRef();



    function setValue() {
        // console.log(document.querySelector('.input-step').value)
        setVal(parseInt(inputRef.current.value))
    }

    function setBg() {
        console.log(countRef.current())
        // countRef.current.style.background = 'red'
    }

    return (
        <div>
            <input type="number" className="input-step" ref={inputRef} />
            <Count3Ref step={10} ref={countRef} />
            <button onClick={setValue}>set value</button>
            <button onClick={setBg}>set Background</button>
        </div>
    )
}


function Count({ step = 1 }, cRef) {

    let [count, setCount] = useState(0);
    function increment() {
        count += step;
        setCount(count)
    }

    function decrement() {
        count -= step;
        setCount(count)
    }
    return <div >
        count: {count} <br />
        <button ref={cRef} onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
}


const CountRef = React.forwardRef(Count)


// Level 3



function Count3({ step = 1 }, cRef) {


    let [count, setCount] = useState(0);
    let btnRef = useRef();
    function increment() {
        count += step;
        setCount(count)
    }

    function decrement() {
        count -= step;
        setCount(count)
    }

    useImperativeHandle(
        cRef,
        () => {

            return () => {
                btnRef.current.style.background = 'green'
            }
        },
    )

    return <div >
        count: {count} <br />
        <button onClick={increment}>Increment</button>
        <button ref={btnRef} onClick={decrement}>Decrement</button>
    </div>
}


const Count3Ref = React.forwardRef(Count3)