import React  from 'react';
export default function(){
    return (
        <>
            <div>
            <div className="header">
                <div className="bounds">
                <h1 className="header--logo">Courses</h1>
                <nav><a className="signup" href="sign-up.html">Sign Up</a><a className="signin" href="sign-in.html">Sign In</a></nav>
                </div>
            </div>
            <hr />
            <div className="bounds">
                <h1>Not Found</h1>
                <p>Sorry! We couldn't find the page you're looking for.</p>
            </div>
            </div>
        </>
    )
}