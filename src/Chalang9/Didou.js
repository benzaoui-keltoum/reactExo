import React from "react";


const Didou=()=>
{
    let tab=[1,2,3,4,5,6]

    return (<>
    <h1> Chalange 09</h1>

    <h2> This is a Component With Children</h2>
    {tab.map(el=><> <h2> This is a Component tab {el} </h2> <p>  This is paragraph {el} </p> </> )}

   

    <button> Click here to Add component</button>
   
    
    
    
    




    
    
    </>
    )
}
export default Didou;