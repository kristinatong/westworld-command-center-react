import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area';

const APIAreas = 'http://localhost:3001/areas'

class WestworldMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      areas: []
    }
  }

  componentDidMount(){
    fetch(APIAreas).then(res => res.json())
      .then(areas => this.setState({areas}))
  }

  getHosts = (areaName) =>{
    return this.props.activeHosts.filter(host => host.area === areaName)
  }

  getAreas = () =>{
    return this.state.areas.map(area => <Area key={area.name} area={area} changeActive={this.props.changeActive} changeArea={this.props.changeArea} hosts={this.getHosts(area.name)} setCurrentHost={this.props.setCurrentHost}/>)
  }

  render(){
    return (
      <Segment id="map" >
        {this.getAreas()}
      </Segment>
    )
  }
}

export default WestworldMap
