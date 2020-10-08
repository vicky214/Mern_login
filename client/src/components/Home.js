import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div className="card" style={{margin:"10%",padding:"20px",textAlign:"center"}}>
            <div className="row"><a href="/auth/google" class="waves-effect waves-light btn">Login with google</a></div>
            <div className="row"><a href="/auth/facebook" class="waves-effect waves-light btn">Login with Facebook</a></div>
            <div className="row"><a href="/auth/linkedin" class="waves-effect waves-light btn">Login with Linkedin</a></div>
            <div className="row"><a href="/auth/github" class="waves-effect waves-light btn">Login with Github</a></div>
            <div className="row"><a href="/auth/instagram" class="waves-effect waves-light btn">Login with Instagram</a></div>
            <div className="row"><Link to='/register' class="waves-effect waves-light btn">Login with Email</Link></div>

       </div>
    )
}
