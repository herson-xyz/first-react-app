// Notes about useState and hooks           -> https://notes.herson.xyz/3+-+Studio+Notes/12/ChatGPT+Documentation+-+First+React+App+-+2
// Notes about useEffect and localstorage   -> https://notes.herson.xyz/3+-+Studio+Notes/12/ChatGPT+Documentation+-+First+React+App+-3
import { useEffect, useState } from "react";

export default function Clicker({ keyName, color = 'darkOrchid'})                       // Destructuring the props being passed in from App.js. We can set a default value for color. 
{
    console.log(color)

    // const countState = useState(0)                                                   // A cleaner way to do this is to destructure. See example below:
    // const count = countState[0]
    // const setCount = countState[1]

    const [count, setCount] = useState(parseInt(localStorage.getItem(keyName) ?? 0))    // nullish coalescing operator -> If undefined, use 0

    useEffect(() =>                                                                     // setting an empty array as the second argument for useEffect will entail that the function gets called only for the first render
    {
        return () =>
        {
          localStorage.removeItem(keyName, color)  
        }
    }, [])

    useEffect(() =>                                                                     // use effect takes two arguments: 1. a function 2. an array that determines when useEffect should execute
    {
        localStorage.setItem(keyName, count)
    }, [ count ])                                                                       // Here we're saying, "execute when the count changes"

    const buttonClick = () =>
    {
        // setCount(value + 1)                                                          // this method doesn't work as well with async processes. We can get stale values. For better results, use method below.
        setCount(value => value + 1)                                                    // simplified arrow function, (value) => { return value + 1 }
    }

    return <div>
        <div style={ { color: color } }>Clicks count: { count }</div>
        <button onClick={ buttonClick }>Click Me</button>
    </div>
}