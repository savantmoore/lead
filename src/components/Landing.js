//src/components/Landing.js

import React from 'react';
import { Link } from 'react-router';
import { Grid, Jumbotron, Button } from 'react-bootstrap';

const Landing = () =>  {
    return (
        <Grid id="Landing" className="container-fluid">
          <Jumbotron id="landing-jumbotron">
            <h1>Use Every Month</h1>
            <h6>If you save 14% of your income you will be a millionaire by 65
            </h6>
            <Button className="nav-btn">
            	<Link className="link" to="what-is-a-rainy-day-fund">Become a financial athlete</Link>
            </Button>
          </Jumbotron>
        </Grid>
    );
}

export default Landing;
