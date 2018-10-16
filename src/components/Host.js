import React, { Component }  from 'react';
import { Card } from 'semantic-ui-react'
import HostInfo from './HostInfo'

class Host extends Component {
  state = {
    clicked: false
    // This is here for demonstration. But should it live here?
    // Consider the fact that we want to make sure you can't select more than one Host at a time
  }


  handleClick = (e) => {
    // this.setState({clicked: !this.state.clicked})
    this.props.setCurrentHost(this.props.host)
  }

  render(){
    let style = this.state.clicked ? {width: "50px", border: "2px solid red", borderRadius: "5px"} : {width: "50px"}

    return(
      <React.Fragment>
        <Card onClick={this.handleClick} style={style}
          raised
          image={this.props.host.imageUrl}
        />
      </React.Fragment>
    )
}

}

export default Host
