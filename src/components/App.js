//src/components/App.js

import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import MenuBar from './MenuBar';

const App = ({children}) =>  {
    return (
        <Grid id="App">
	          <Row id="MenuBar"><MenuBar/></Row>
	          <Row>{children}</Row>
	    </Grid>
    );
  }

export default App;
