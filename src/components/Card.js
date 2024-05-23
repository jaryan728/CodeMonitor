import React from 'react'
export default function Card(props) {
  return (
     
    <div id='card1'>
      < div className="box1">
        <div className='sbox'>{props.platform}
<img src={props.photo} alt="cco" className='img'/></div>
<div className="subm">
  <div>Problems Solved</div>
  <div className="submb">{props.solved}</div>
  <div>
    <span className='dtl'>Easy :{props.easy}</span>
    <span className='dtl'>Medium :{props.medium}</span>
    <span className='dtl'>Hard :{props.hard}</span>
    
    </div>


    </div>   

    <div className="contest">
      <div>Contest Details</div>
      <div >Attended:   {props.attended}</div>
    <div>  Rating:
      {props.rating}</div>
      <div className='attend'>Global Rank:    {props.rank}</div>
    </div>
      </div>
    </div>
   
  )
}
