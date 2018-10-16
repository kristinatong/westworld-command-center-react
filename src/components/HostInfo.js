import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, List, Segment, Divider } from 'semantic-ui-react'


class HostInfo extends Component{
  constructor(props){
    super(props)
    this.state = {
      checked: false,
      value: "",
      areas: []
      // This state is here to show you how the Info box should work. But it doesn't have to (and probably shouldn't) live here
      // Plus the areas aren't called area1,2,or 3. That's just a placeholder.
    }
  }

  // componentDidMount(){
  //   this.setState({
  //     value: this.props.currentHost.area,
  //
  //   })
  // }

  handleChange = (e,{value}) => {
    this.setState({
      value: value
    })
    this.props.changeArea(value)
  }


  toggle = () => {
    this.props.changeActive()
  }

  render(){
    console.log(`render`,this.state)
    console.log(`render-props`,this.props)
    // const { value} = this.state
    // A lot of these values are hardcoded.....but they shouldn't be, hint hint....
    const areas = [
      {key: 'high_plains', text: 'High Plains', value: 'high_plains'},
      {key: 'lowlands', text: 'Lowlands', value: 'lowlands'},
      {key: 'under_construction', text: 'Under Construction', value: 'under_construction'},
      {key: 'badlands', text: 'Badlands', value: 'badlands'},
      {key: 'pariah', text: 'Pariah', value: 'pariah'},
      {key: 'python_pass', text: 'Python Pass', value: 'python_pass'}
    ]
    return (
      <Segment>
        <Grid>
          <Grid.Column width={6}>
            <Image floated='left' size='small' src={this.props.currentHost.imageUrl}/>
          </Grid.Column>
          <Grid.Column width={10}>
            <Card>
              <Card.Content>
                <Card.Header>
                  {this.props.currentHost.firstName} {this.props.currentHost.lastName}
                  {this.props.currentHost.gender === "Male" ? <Icon name='man' /> : <Icon name='woman' />
                /* What should happen when the host isn't a man? Or when his name isn't Teddy? */}
                </Card.Header>
                <Card.Meta>
                  <Radio style={{margin: "10px"}} slider onChange={this.toggle} label={this.props.currentHost.active ? "Active" : "Decommissioned"} checked={this.props.currentHost.active}/>
                </Card.Meta>

                <Divider />
                Current Area:
                <Dropdown
                  onChange={(event,obj) => this.handleChange(event,obj)}
                  value={this.state.value}
                  selection
                  options={areas} />

              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default HostInfo
