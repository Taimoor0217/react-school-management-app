/* eslint-disable jsx-a11y/anchor-is-valid */
import React , { useContext} from 'react';
import {UserContext} from "./UserContext";
export default function(props){
    let appContext = useContext(UserContext);
    return (
        <>
        <div className="header">
            <div className="bounds">
            <h1 className="header--logo">Courses</h1>
            <nav>
                {
                appContext.user ?
                <>
                    <span> {`Welcome ${appContext.user.firstName || " "} ${appContext.user.lastName || " "}!`} </span>
                    <a className="signin" href="/signout">Sign Out</a>
                </>
                :
                <>
                    <a className="signup" href="/signup">Sign Up</a>
                    <a className="signin" href="/signin">Sign In</a>
                </> 
                }
            </nav>
            </div>
        </div>
        </>
    )
}