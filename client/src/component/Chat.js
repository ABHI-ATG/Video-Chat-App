import { useContext } from "react";
import { UserContext } from "../App";
import Nav from "./Nav";
import Video from "./Video";
import Text from "./Text";

function Chat(){
    const {state,dispatch}=useContext(UserContext);

    console.log(state);

    return (
        <>
            <Nav/>
            <Video/>
            <Text/>

        </>
    )

}

export default Chat;