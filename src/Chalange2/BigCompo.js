import React from "react";
import SmallCompo from "./SmallCompo";

class BigCompo extends React.Component
{

render()
{

return <>
   <h2>  I am a big Component</h2>
    <SmallCompo></SmallCompo>
</>


}



}

export default BigCompo;