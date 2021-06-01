import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
        <div className="error-page">
        <div id="watermark">#404</div>
            <div className="error-page-title"style={{fontSize:"2.5rem"}}>
                <p>WE ARE SORRY,PAGE NOT FOUND</p>

            </div>
            <div className="error-page-desc" style={{fontSize:"0.8rem",color:"red"}}>
                <div className="err-first-line">
                <span>THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED OR IT'S NAME </span>
                </div><br/>
                <div className="err-second-line ">
                <span>OR TEMPORARILY UNAVAILIABLE</span>
                </div>
                
            </div>
            <div className="error-page-button">
                <Link to="/" className="btn-link ml-5"style={{width:"30%",display:"block",alignItems:"center"}}>
                <input type="submit" className="btn btn-warning" value="Go back to home page" name="errbtn" />

                </Link>
                
            </div>
        </div>
            
        </>
    )
}

export default ErrorPage
