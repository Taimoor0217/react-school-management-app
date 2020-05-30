import React, {useState, useContext}  from 'react';
import {UserContext} from "./UserContext";
import {useHistory} from "react-router-dom";
export default function(){
    const [ emailAddress , setEmail ] = useState("")
    const [ password , setPassword ] = useState("")
    let history = useHistory();
    let appContext = useContext(UserContext);

    function handleSubmit(e){
        e.preventDefault()
        appContext
        .Login({emailAddress , password} , appContext.Url)
        .then(res=>{
            appContext.setUser({
                ...res.data,
                password
            })
            history.push('/')
        })
        .catch(err=>{
            console.log("An error occured" , err)
        })
        setEmail("")
        setPassword("")
    }

    return (
        <>
        <div>
        <div className="bounds">
            <div className="grid-33 centered signin">
            <h1>Sign In</h1>
            <div>
                <form>
                <div>
                    <input
                    id="emailAddress"
                    name="emailAddress"
                    type="text"
                    placeholder="Email Address"
                    value= {emailAddress}
                    onChange = {e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value= {password}
                    onChange = {e => setPassword(e.target.value)}
                    />
                </div>
                <div className="grid-100 pad-bottom">
                    <button className="button" onClick= {handleSubmit}>
                    Sign In
                    </button>
                    <button
                    className="button button-secondary"
                    onClick = {e=>{
                        e.preventDefault()
                        history.push("/")
                    }}
                    >
                    Cancel
                    </button>
                </div>
                </form>
            </div>
            <p>&nbsp;</p>
            <p>
                Don't have a user account? <a href="/signup">Click here</a> to sign
                up!
            </p>
            </div>
        </div>
        </div>

    </>
    )
}