import { useState } from "react";

export default function Clicker()
{
    
    const countState = useState(0)
    const count = countState[0]
    const setCount = countState[1]

    const buttonClick = () =>
    {
        setCount(count + 1)
    }

    return <div>
        <div>Clicks count: 0</div>
        <button onClick={ buttonClick }>Click Me</button>
    </div>
}