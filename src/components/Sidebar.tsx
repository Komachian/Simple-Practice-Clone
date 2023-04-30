import React from 'react'
import { Link } from 'react-router-dom'
import './styles/sidebar.css'
import calendarIcon from './calendar.svg'
import peopleIcon from './people.svg'
import billingIcon from './card-billing.svg'
import insuranceIcon from './shield.svg'
import analyticsIcon from './analytics.svg'
import menuIcon from './menu.svg'
import noteIcon from './notes.svg'
import settingsIcon from './settings.svg'
import eyeIcon from './eye.svg'

function Sidebar() {
  return (
    <div className='sidebar-container'>
        <Link to='/' className='side-item'><img src={calendarIcon}/>Calendar</Link>
        <Link to='/clients' className='side-item'><img src={peopleIcon}/>Clients</Link>
        <Link to='#' className='side-item'><img src={billingIcon}/>Billing</Link>
        <Link to='#' className='side-item'><img src={insuranceIcon}/>Insurance</Link>
        <Link to='#' className='side-item'><img src={analyticsIcon}/>Analytics</Link>
        <Link to='#' className='side-item'><img src={menuIcon}/>Account Activity</Link>
        <Link to='/meetings' className='side-item'><img src={noteIcon}/>Meetings</Link>
        <Link to='#' className='side-item'><img src={settingsIcon}/>Settings</Link>
        <hr />
        <Link to='#' className='side-item'><img src={eyeIcon}/>Recently Viewed</Link>
        {/* <div>Privacy Off</div> */}
    </div>
  )
}

export default Sidebar