import { useMemo, useState } from "react";
import Clicker from "./Clicker.js";

export default function App( { clickersCount, children })
{
    const [ hasClicker, setHasClicker ] = useState(true)                                                // Simple way to think about it: If it's a variable that changes the app, it's a state variable
    const [ count, setCount ] = useState(0)
    
    const toggleClickerClick = () =>
    {
        setHasClicker(!hasClicker)                                                                  // If it's true, return false. And vice versa.   
    }

    const increment = () =>                                                                         // We set this function at the parent, and make it available to the children. This is how we manage a global state.
    {
        setCount(count + 1)    
    }

    // const tempArray = [...Array(clickersCount)]                                                     // This is a quick test for what we are going to do below in our render function. Use spread operator to take the 'undefined' values of an old Array and set them to a new Array that is `clickersCount` long
    // tempArray.map((value, index) => {
    //     console.log(value, index)
    // })

    const colors = useMemo(() =>
    {
        const colors = []

        for (let i = 0; i < clickersCount; i++)
        {
            colors.push(`hsl(${Math.random() * 360}deg, 100%, 70%)`)    
        }

        return colors
    }, [clickersCount])

    return <>
        {children}
        
        <div>Total count: {count}</div>
        
        <button onClick={toggleClickerClick}>{hasClicker ? 'Hide' : 'Show'} Clicker</button>         {/*// Do not call the function. Provide the function. */}
        
        {/* { hasClicker ? <Clicker /> : null} */}
        {hasClicker && <>                                                                             {/* This is a condensed way of doing the same as the previous line*/}
            {[...Array(clickersCount)].map((value, index) =>                                            // Map function returns Clicker. We want to access the index for the count keyName
                <Clicker
                    key={ index }
                    increment={increment}
                    keyName={ `count${index}` }
                    color={ colors[index]} />                              // Pass the increment function as an attribute
            ) }
        </> }                                                                   
    </>
}