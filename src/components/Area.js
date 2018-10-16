import React from 'react';
import HostList from './HostList';

const Area = (props) => {
  // console.log(props)

  return(
    <div style={props.area.style} className='area'>
      <h3>{props.area.name}</h3>
      <HostList changeActive={props.changeActive} changeArea={props.changeArea} setCurrentHost={props.setCurrentHost} hosts={props.hosts}/>
    </div>
  )
}

export default Area;
