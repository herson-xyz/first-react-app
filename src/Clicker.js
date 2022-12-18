import { useState } from "react";

export default function Clicker()
{
    
    // const countState = useState(0) // A cleaner way to do this is to destructure. See example below:
    // const count = countState[0]
    // const setCount = countState[1]

    const [ count, setCount] = useState(0)

    const buttonClick = () =>
    {
        // setCount(value + 1) // this method doesn't work as well with async processes. We can get stale values. For better results, use method below.
        setCount(value => value + 1) // simplified arrow function, (value) => { return value + 1 }
    }

    return <div>
        <div>Clicks count: { count }</div>
        <button onClick={ buttonClick }>Click Me</button>
    </div>
}