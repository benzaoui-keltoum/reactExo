import React from "react";
import CompChild from "./CompChild";
//    


const Didou=(props)=>
{
    let tab=[1,2,3,4,5,6]

    return (<>
    <h1> Chalange 09</h1>

    <h2> This is a Component With Children</h2>


<CompChild>
{tab.map(el=><> <h2> This is a Component  {el} </h2> <p>  This is paragraph {el} </p> </> )}
</CompChild>
    <button> Click here to Add component</button>
   
    
    
    
    


    
    
    </>
    )
}
export default Didou;