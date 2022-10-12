import React from "react";
import CChild from "./CChild";
/*
use state
*/


const addbtn=()=>{
   



}

const Work=()=>{

    let tab=[1,2,3,4,5,6]

    return (<>
    <h1> Chalange 11</h1>

    <h2> This is a Component With Children</h2>


<CChild>
{tab.map(el=><> <h2> This is a Component  {el} </h2> <p>  This is paragraph {el} </p> </> )}
</CChild>
    <button onClick={()=>addbtn()}> Click here to Add component</button>
   
       
    
    </>
    )
}
export default Work;

