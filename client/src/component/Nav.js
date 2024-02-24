import { useContext, useEffect } from "react";
import { UserContext } from "../App";


export default function Nav(){
    const {state,dispatch}=useContext(UserContext);

    useEffect(()=>{
        if(!state.name && localStorage.getItem("name")){
            dispatch({type:"name",payload:localStorage.getItem("name")})
            dispatch({type:"email",payload:localStorage.getItem("email")})
            dispatch({type:"code",payload:localStorage.getItem("code")})
        }
    },[])

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