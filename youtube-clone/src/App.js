import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import {SearchBar,VideoDetail} from './Component';

class App extends React.Component {
  render() {
    return(
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <SearchBar/>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail/>
            </Grid>
            <Grid item xs={4}>
              
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
