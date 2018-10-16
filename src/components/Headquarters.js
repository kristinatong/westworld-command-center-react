import React from 'react';
import { Grid } from 'semantic-ui-react';
import HostInfo from './HostInfo'
import ColdStorage from './ColdStorage'

const Headquarters = (props) => {

  return(
    <Grid celled='internally'>
      <Grid.Column width={10}>

        <ColdStorage hosts={props.inactiveHosts} setCurrentHost={props.setCurrentHost}/>

      </Grid.Column>

      <Grid.Column width={5}>

        <HostInfo changeActive={props.changeActive} changeArea={props.changeArea} currentHost={props.currentHost}/>

      </Grid.Column>
    </Grid>
  )
}


export default Headquarters;
