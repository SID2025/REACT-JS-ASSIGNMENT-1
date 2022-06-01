
import React,{useState}  from "react";

function Button(props) {
const [buttonName, setButtonName] = useState(props.text);


    const handleclick=()=>{
        if (buttonName==="Add To Cart")
        // ...We are calling setCount function...
        {props.setCount();
        setButtonName("Remove");
        }
        if (buttonName==="Remove")
        //   ...We are calling remCount function...
        {props.remCount();
        setButtonName("Add To Cart");
        }
       
    }
return(

    <div>
         <button className="btn btn-outline-dark mt-auto" onClick={handleclick}>{buttonName}</button>
    </div>
)

};

export default Button;