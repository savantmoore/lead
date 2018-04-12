//src/components/WhatIsARainyDayFund
import React, { Component } from 'react';
import {Link} from 'react-router'
import { Button } from 'react-bootstrap';

const WhatIsARainyDayFund = () =>  {

    return (
        <div id="WhatIsARainyDayFund">
		   <h1>Save FRWD</h1>

		 
		   <h3>
				This app has 3 steps.<br/><br/>
				1. Income.<br/><br/>
				2. Expenses.<br/><br/>
				3. Savings Plan.<br/><br/>
		   </h3>

	        <Button className="nav-btn" block>
	    		<Link className="link" to="assumptions">Income</Link>
	    	</Button>
        </div>
    );
}


export default WhatIsARainyDayFund;
