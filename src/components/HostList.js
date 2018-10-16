import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => (
  <Card.Group itemsPerRow={6}>
    {props.hosts.map(host => <Host changeArea={props.changeArea} key={host.firstName} changeActive={props.changeActive} host={host} setCurrentHost={props.setCurrentHost}/>)}
  </Card.Group>
)


export default HostList
