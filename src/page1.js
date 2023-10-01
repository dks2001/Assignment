import React from "react";
import { Link } from "react-router-dom";


const Page1 = () => {

    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/page2'>Page2</Link>
        </div>
        
    );

}

export default Page1;