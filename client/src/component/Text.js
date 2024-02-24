import { useContext, useEffect, useState } from "react"
import { UserContext } from "../App"

export default function Text(){
    
    const [message,setMessage]=useState("");
    const {state,dispatch}=useContext(UserContext);

    useEffect(()=>{
        if(state && state.socket){
            state.socket.on('recieved',(data)=>{
                dispatch({type:"message",payload:data})
            })
            return ()=>{
                state.socket.disconnect();
            }
        }
    },[state.socket])

    const send=()=>{
        if(state && state.socket){
            state.socket.emit('send',{message:message,code:state.code,email:state.email,name:state.name})
        }
        setMessage("")
    }

    useEffect(()=>{
        console.log(state.message)
    },[state.message])

    return (
        <>
            {state.message.length>0?state.message.map((data)=>{
                return (
                    <>
                        <div className={data.email==state.email?"left":"right"}>
                            {data.message}
                        </div>
                    </>
                )
            }):<></>}
            <input type="text" placeholder="Type Text..." onChange={(e)=>{
                setMessage(e.target.value)
            }}/>
            <button onClick={send}>Send</button>
        </>
    )
}