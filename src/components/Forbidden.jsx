import React  from 'react';
export default function(){
    return (
        <>
          <div>
            <div className="header">
                <div className="bounds">
                <h1 className="header--logo">Courses</h1>
                <nav><span>Welcome Joe Smith!</span><a className="signout" href="index.html">Sign Out</a></nav>
                </div>
            </div>
            <hr />
            <div className="bounds">
                <h1>Forbidden</h1>
                <p>Oh oh! You can't access this page.</p>
            </div>
            </div>

        </>
    )
}