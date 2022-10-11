import React from "react";

const Hama=(props)=>{ 

    const profile=[{name:"ikram",prenom:"fifou",age:22},{name:"keltoum",prenom:"koukou",age:22},{name:"amel",prenom:"ninou",age:22}]

    return( <> 

<h2>Chalange 7</h2>
<h2>  This is a list Component</h2>
<ul>

{profile.map(({name,prenom,age}) => <>
                                <li style={{listStyleType :"none" }}> <strong style={{}}>{name} </strong><h6 style={{color :"pink",fontSize:"60" }}> {prenom}</h6>  <h5>{age} </h5></li>
                                                              </>
                                )
                                
}


</ul>

 </>);
    }

export default Hama;


