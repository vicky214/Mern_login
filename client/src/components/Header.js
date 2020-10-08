import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';

function Header(props) {
    const renderData=()=>{
        switch(props.user){
            case null:
                return (<li><a href="/">Loading...</a></li>);
            case false:
                return <li><a href="/">Login</a></li>
            default:
                return(
                  <React.Fragment>
                      <li><a href="/api/logout">Logout</a></li>
                  </React.Fragment>
              )
        }
    }
    return (
        <nav>
            <div className="nav-wrapper purple darken-4">
            <Link to='/' className="brand-logo">Authentication</Link>
            <ul id="nav-mobile" className="right">
               {renderData()}
            </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = (state)=>{
    return {
        user:state.auth
    }
}

export default connect(mapStateToProps)(Header);