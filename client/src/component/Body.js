import { UserContext } from '../App';
import { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'

function Body(){
    const {state,dispatch}=useContext(UserContext);
    const navigate=useNavigate();

    const start=async()=>{
        try{
            const {data}=await axios.post('http://localhost:8000/api/create',{
                name:state.name,
                email:state.email
            },{
                method:"POST",
                Headers:{
                    "Content-Type": "application/json",
                }
            })
            dispatch({type:"code",payload:data.code})
            localStorage.setItem("name",state.name)
            localStorage.setItem("email",state.email)
            localStorage.setItem("code",data.code)
            console.log(data);
            navigate('/chat');
        }catch(error){
            console.log(error);
        }
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
                <button onClick={start}>Create</button>
                <br/>
                <input type="text" placeholder='Enter Code'/>
                <Link to="/chat">Join</Link>
            </div>
        </>
    )
}
export default Body;