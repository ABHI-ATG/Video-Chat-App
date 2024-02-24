import { useContext, useEffect } from "react";
import { UserContext } from "../App";


export default function Nav(){
    const {state,dispatch}=useContext(UserContext);

  
    return (
        <>
            <h4>
                {state.name}
            </h4>
            <h4>
                {state.code}
            </h4>
        </>
    )    
}