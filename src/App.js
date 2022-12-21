import { useState } from "react";
import Clicker from "./Clicker.js";

export default function App()
{
const [hasClicker, setHasClicker] = useState(true)                                                      // Simple way to think about it: If it's a variable that changes the app, it's a state variable

    const toggleClickerClick = () =>
    {
        setHasClicker(!hasClicker)                                                                      // If it's true, return false. And vice versa.   
    }

    return <>
        <button onClick={ toggleClickerClick }>{ hasClicker ? 'Hide' : 'Show'} Clicker</button>         {/*// Do not call the function. Provide the function. */}
        {/* { hasClicker ? <Clicker /> : null} */}
        { hasClicker && <Clicker /> }                                                                   {/* This is a condensed way of doing the same as the previous line*/}
    </>
}