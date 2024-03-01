import { useContext } from "react";
import { UserContext } from "../App";


export default function Nav(){
    const {state}=useContext(UserContext);

  
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