import { useState } from "react";

const BtnContador = () => {

    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        const num = counter + 1;
        setCounter(num);
        console.log('Click', num);
    }

    return (
        <button onClick={handleClick}>{counter}</button>
    )
}

export default BtnContador