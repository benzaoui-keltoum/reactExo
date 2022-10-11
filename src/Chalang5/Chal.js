import React from "react";

import snow1 from './asset/snow1.jpg';
import snow2 from './asset/snow2.jpg';
import snow3 from './asset/snow3.jpg';


function Chal()
{

const styles={

marginleft:50,


    }
return(<>

<h1> Challenge 05</h1>
<h2> This is a Component Holding an Image</h2>

<img src={snow1} style={styles} alt="snwo1"></img>
<img src={snow2} style={styles} alt="snwo2"></img>
<img src={snow3} style={styles} alt="snwo3"></img>




</>
);

}

export default Chal; 