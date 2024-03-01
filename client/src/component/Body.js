import { UserContext } from '../App';
import { useContext, useState } from 'react';
import { useNavigate} from 'react-router-dom';

function Body(){
    const {state,dispatch}=useContext(UserContext);
    const navigate=useNavigate();

    const [joinCode,setJoinCode]=useState(null)
    const join=()=>{
        localStorage.setItem("name",state.name)
        localStorage.setItem("email",state.email)
        if(joinCode){
            dispatch({type:"remoteSocketCode",payload:joinCode})
            localStorage.setItem("remoteSocketCode",joinCode)
        }
        navigate('/chat');
    };

    return (
        <>
            <div>
                <input type="text" placeholder='Enter Your Name' onChange={(e)=>{
                    dispatch({type:"name",payload:e.target.value})
                }}/>
                <br/>
                <input type="text" placeholder='Enter Your Email' onChange={(e)=>{
                    dispatch({type:"email",payload:e.target.value})
                }}/>
                <br/>
                <input type="text" placeholder='Enter Code (If already have)' onChange={(e)=>{
                    setJoinCode(e.target.value)
                }}/>
                <button onClick={join}>Join</button>
            </div>
        </>
    )
}
export default Body;