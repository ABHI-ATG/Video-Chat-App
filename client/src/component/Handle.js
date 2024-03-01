import { useContext, useEffect } from "react";
import { UserContext } from "../App";
import io from 'socket.io-client'
const socket=io('http://localhost:8000');

export default function(){

    const {state,dispatch}=useContext(UserContext);

    useEffect(()=>{
        if(!state.name && localStorage.getItem("name")){
            dispatch({type:"name",payload:localStorage.getItem("name")})
            dispatch({type:"email",payload:localStorage.getItem("email")})
        }
        // socket.emit('join',localStorage.getItem('code'))
        dispatch({type:"socket",payload:socket})
        console.log(socket);
        console.log("socketId : "+socket.id);
        console.log(socket.id);
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <>
        </>
    )
};