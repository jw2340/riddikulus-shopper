import React from 'react'
import {Link} from 'react-router'
import Login from './Login'
import WhoAmI from './WhoAmI'

export default (props) => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
           <a href="#" className="navbar-brand">Riddikulus</a>
          </div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            {props.user ? <WhoAmI/> : <Login/>}
          </li>
          <li>
            <Link to="/cart" className="navbar-link">
              <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
              (1)
            </Link>
          </li>
        </ul>
        </div>
      </nav>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Beasts <span className="sr-only">(current)</span></a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Training</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
          <form className="navbar-form navbar-left">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </nav>
    </div>
  )
}
