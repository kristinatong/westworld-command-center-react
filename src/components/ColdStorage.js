import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'


const ColdStorage = (props) => {

  return(
    <Segment style={{height:'100%'}}>
      <h3>ColdStorage</h3>
      <HostList hosts={props.hosts} setCurrentHost={props.setCurrentHost}/>
    </Segment>
  )
}

export default ColdStorage
