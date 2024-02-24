import { useContext, useEffect } from "react";
import { UserContext } from "../App";
import Nav from "./Nav";
import Video from "./Video";
import Text from "./Text";
import io from 'socket.io-client'

const socket=io('http://localhost:8000');

function Chat(){
    const {state,dispatch}=useContext(UserContext);

    useEffect(()=>{
        if(!state.name && localStorage.getItem("name")){
            dispatch({type:"name",payload:localStorage.getItem("name")})
            dispatch({type:"email",payload:localStorage.getItem("email")})
            dispatch({type:"code",payload:localStorage.getItem("code")})
        }
        console.log(state)
    },[])


    useEffect(() => {
        socket.emit('join',localStorage.getItem('code'))
        dispatch({type:"socket",payload:socket})
        console.log(state);
        return () => {
            socket.disconnect();
        };
    }, []);
    
    return (
        <>
            <Nav/>
            <Video/>
            <br/>
            <Text/>

        </>
    )

}

export default Chat;