import { Route, Routes } from 'react-router-dom';
import Body from './component/Body'
import Chat from './component/Chat'
import { createContext, useReducer } from 'react';

export const UserContext=createContext();

const intitialState={
  name:null,
  email:null,
  code:null,
}

const reducer=(state,action)=>{
  switch (action.type){
    case "name":
      return {...state,name:action.payload};
    case "email":
      return {...state,email:action.payload};
    case "code":
      return {...state,code:action.payload};
    default:
      return state;
  }
}

function App() {

  const [state,dispatch]=useReducer(reducer,intitialState);

  return (
    <>
      <UserContext.Provider value={{state,dispatch}}>
        <Routes>
          <Route path="/" Component={Body}></Route>
          <Route path="/chat" Component={Chat}></Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
