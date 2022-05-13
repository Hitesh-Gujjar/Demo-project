import React from 'react'
import './Foot.css';

function Footer() {
  return (
    <>
           <div className='Footmaindiv'>
           <div className='row'>
                    <div className='col-sm-3'>
                        <h4><i>dribbble </i></h4>
                        <p>Dribbble is the world’s leading community for creatives to share, grow, and get hired.</p>
                    </div>
                <div className='col-sm-9'>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <h4>For designers</h4>
                            <ul>
                            <li> GO Pro!</li>
                                <li>Play offs</li>
                            </ul>
                        </div>
                        <div className='col-sm-3'>
                        <h4>Hire designers</h4>
                            <ul>
                                <li>Post a Job Opening</li>
                                <li>Brans</li>
                            </ul>
                        </div>
                        <div className='col-sm-3'>
                        <h4>Company</h4>
                            <ul>
                                <li> Abouts</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className='col-sm-3'>
                        <h4>Directories</h4>
                            <ul>
                                <li>Design Jobs</li>
                                <li>TAgs</li>
                            </ul>
                        </div>
                    </div>
                </div>
               
            </div>
           </div>
    </>
  )
}

export default Footer