// Notes about useState and hooks -> 
// https://notes.herson.xyz/3+-+Studio+Notes/12/Documentation+-+First+React+App+-+2

import { useEffect, useState } from "react";

export default function Clicker()
{
    
    // const countState = useState(0)                                                   // A cleaner way to do this is to destructure. See example below:
    // const count = countState[0]
    // const setCount = countState[1]

    const [count, setCount] = useState(parseInt(localStorage.getItem('count') ?? 0))    // nullish coalescing operator -> If undefined, use 0

    useEffect(() =>                                                                     // setting an empty array as the second argument for useEffect will entail that the function gets called only for the first render
    {

    }, [])

    useEffect(() =>                                                                     // use effect takes two arguments: 1. a function 2. an array that determines when useEffect should execute
    {
        localStorage.setItem('count', count)
    }, [ count ])                                                                       // Here we're saying, "execute when the count changes"

    const buttonClick = () =>
    {
        // setCount(value + 1)                                                          // this method doesn't work as well with async processes. We can get stale values. For better results, use method below.
        setCount(value => value + 1)                                                    // simplified arrow function, (value) => { return value + 1 }
    }

    return <div>
        <div>Clicks count: { count }</div>
        <button onClick={ buttonClick }>Click Me</button>
    </div>
}