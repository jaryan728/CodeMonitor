import React from 'react'
export default function Card(props) {
  return (
    <div id='card2'>
      < div className="box1">
        <div className='sbox'>{props.platform}
<img src={props.photo} alt="cco" className='img'/></div>
<div className="subm">
  <div>Stars</div>
  <div className="submb">{props.stars}</div>
  <div>
    <span className='dtl'>Current Rating :{props.current}</span>
    <span className='dtl'>Highest Rating :{props.highest}</span>
    
    </div>


    </div>   

    <div className="contest">
      <div>Ranking</div>
        <div>Country Rank:{props.crank}</div>
      <div className='attend'>Global Rank:    {props.grank}</div>
    </div>
      </div>
    </div>
  )
}
