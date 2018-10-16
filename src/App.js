import React, { Component} from 'react';
import { Segment } from 'semantic-ui-react';
import Headquarters from './components/Headquarters'
import WestworldMap from './components/WestworldMap'
const APIHosts = 'http://localhost:3001/hosts'

class App extends Component {
  state={
    hosts: [],
    currentHost: {}
  }

  componentDidMount(){
    fetch(APIHosts).then(res => res.json())
      .then(hosts => this.setState({hosts}))
  }

  getActiveHosts = () => {
    return this.state.hosts.filter(host => host.active===true)
  }

  getInactiveHosts = () => {
    return this.state.hosts.filter(host => host.active===false)
  }

  setCurrentHost = (host) => {
    this.setState({
      currentHost: host
    })
  }

  changeActive = () => {
    const newCurrentHost = {...this.state.currentHost}
    newCurrentHost.active = !this.state.currentHost.active
    const newHosts = [...this.state.hosts]
    newHosts.find(host => host.firstName===newCurrentHost.firstName).active = !this.state.currentHost.active
    this.setState({
      currentHost: newCurrentHost,
      hosts: newHosts
    })
  }

  changeArea = (newArea) => {
    const newCurrentHost = {...this.state.currentHost}
    const newHosts = [...this.state.hosts]
    newCurrentHost.area = newArea
    newHosts.find(host => host.firstName===newCurrentHost.firstName).area = newArea
    this.setState({
      currentHost: newCurrentHost,
      hosts: newHosts
    })
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap changeActive={this.changeActive} changeArea={this.changeArea} activeHosts={this.getActiveHosts()} setCurrentHost={this.setCurrentHost}/>
        <Headquarters changeActive={this.changeActive} changeArea={this.changeArea} inactiveHosts={this.getInactiveHosts()} setCurrentHost={this.setCurrentHost} currentHost={this.state.currentHost}/>
      </Segment>
    )
  }
}

export default App;
