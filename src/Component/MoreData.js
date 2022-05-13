import React from 'react'
import Card from './Card'

function MoreData() {
  return (
   <>
   
   <div className='container'>
   <div>
       <h5>More by Ronas IT | UI/UX Team</h5>
   </div>
   <div className='row'>
        <div className='col-sm-3'>
        <Card></Card>   
        </div>
        <div className='col-sm-3'><Card></Card></div>
        <div className='col-sm-3'><Card></Card></div>
        <div className='col-sm-3'><Card></Card></div>
   </div>
   </div>
   
   </>
  )
}

export default MoreData