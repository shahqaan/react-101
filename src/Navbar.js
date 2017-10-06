/**
 * Created by shahqaan on 06/10/2017.
 */
import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
     <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <a className="navbar-brand" href="#">React 101</a>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">

           </ul>
           <form className="form-inline my-2 my-lg-0">
             <button className="btn btn-outline-success navbar-right">{this.props.posts.length}</button>
           </form>
         </div>

       </nav>


     </div>
    );
  }
}

export default Navbar;
