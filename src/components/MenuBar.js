//src/components/MenuBar.js

import React from 'react';
import {Link} from 'react-router'
import { ButtonGroup, Button } from 'react-bootstrap';

const Menubar = () => {
  return (
          <ButtonGroup id="menu" justified>
            <Button className="menu-btn" href="#">
            	<Link className="link" to="what-is-a-rainy-day-fund">FRWD APP</Link>
            </Button>
            <Button className="menu-btn" href="#" >
            	<Link className="link" to="assumptions">Income</Link>
            </Button>
            <Button className="menu-btn" href="#">
            	<Link className="link" to="expenses">Expenses</Link>
            </Button>
            <Button className="menu-btn" href="#">
            	<Link className="link" to="savings-plan">Savings Plan</Link>
            </Button>
          </ButtonGroup>
  )
}

export default Menubar;
