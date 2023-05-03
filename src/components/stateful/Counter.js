import { useState } from 'react';

export default function Counter()
{
    let [count, setCount] = useState(0); // receive initial state and return getter and setter
    let [positive, setPositive] = useState(true);

    let increment = () => {
        // count ++;
        if (positive)
        {
            setCount(count + 1);
        }
        else
        {
            setCount(count - 1);
        }
        // console.log(count);
    };

    let toggle = () => {
        setPositive(!positive);
    };

    return (<div>
        Counter {count}
        <button 
            type={"button"}
            className={"btn btn-primary"}
            onClick={increment}>
            +
        </button>
        <button 
            type={"button"}
            className={"btn btn-primary"}
            onClick={toggle}>
            Toggle
        </button>
    </div>);
}