import React, { useContext } from "react";
import { Redirect} from "react-router-dom";
import {UserContext} from "./UserContext";
export default function(props){
    let appContext = useContext(UserContext);
    if(appContext.user){ 
       return <props.Component />
    }else{
        return <Redirect to="/signin"/>;
    }
}