import { Route, Routes } from 'react-router-dom';
import Body from './component/Body'
import Chat from './component/Chat'
import Handle from './component/Handle'
import { createContext, useReducer } from 'react';

export const UserContext=createContext();

const intitialState={
  name:null,
  email:null,
  roomNo:null,
  socketCode:null,
  remoteSocketCode:null,
  peerRoomNo:null,
  peerId:null,
  remotePeerId:null,
  socket:null,
  peer:null,
  message:[],
}

const reducer=(state,action)=>{
  switch (action.type){
    case "name":
      return {...state,name:action.payload};
    case "email":
      return {...state,email:action.payload};
    case "roomNo":
      return {...state,roomNo:action.payload};
    case "socketCode":
      return {...state,socketCode:action.payload};
    case "remoteSocketCode":
      return {...state,remoteSocketCode:action.payload};
    case "peerRoomNo":
      return {...state,peerRoomNo:action.payload};
    case "peerId":
      return {...state,peerId:action.payload};
    case "remotePeerId":
      return {...state,remotePeerId:action.payload};
    case "socket":
      return {...state,socket:action.payload};
    case "peer":
      return {...state,peer:action.payload};
    case "message":
      return {...state,message:[...state.message,{
        email:action.payload.email,
        message:action.payload.message,
        name:action.payload.name
      }]};
    default:
      return state;
  }
}

function App() {

  const [state,dispatch]=useReducer(reducer,intitialState);

  return (
    <>
      <UserContext.Provider value={{state,dispatch}}>
        <Handle/>
        <Routes>
          <Route path="/" Component={Body}></Route>
          <Route path="/chat" Component={Chat}></Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
