import React from 'react';
import classes from './Layout.module.css';

function Layout(props) {
  return (
  	<div>
	    <div className={classes.layoutWrapper}>
	    	<ul className={classes.topMenu}>
	    	<li className={classes.logIn}><a href="#">LOGIN</a></li>
	    	<li className={classes.signUp}><a href="#">SIGNUP</a></li>
	    	</ul>
	    </div>
    	{props.children}
    </div>	
  );
}

export default Layout;
