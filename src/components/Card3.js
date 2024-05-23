import React from 'react'
export default function Card(props) {

  return (
    <div id='card3'>
      < div className="box1">
        <div className='sbox'>{props.platform}
<img src={props.photo} alt="cco" className='img'/></div>
<div className="subm">
  <div>Contributions</div>
  <div className="submb">{props.contr}</div>
  <div>
    <span className='dtl'>Rating :{props.crating}</span>
    
    </div>


    </div>   

    <div className="contest">
      <div>Problems Solved</div>
      <div className='attend'>  {props.solved}</div>
    </div>
      </div>
    </div>
  )
}
