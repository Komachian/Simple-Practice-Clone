import React from 'react'
import Logo from './logo.png'
import './styles/navbar.css'
import searchIcon from './search.svg'
import stockIcon from './graph-line.svg'
import plusIcon from './plus.svg'
import requestIcon from './reminders.svg'
import messageIcon from './message.svg'


function Navbar() {
  return (
    <div className='nav-container'>
        <img className='navbar-logo' src={Logo}/>
        <div className='nav-search'><img src={searchIcon}/><input placeholder='Search clients'/></div>
        <div className='nav-income'>
            <img src={stockIcon} />
            <div><span>Apr income</span>
            <span>$100.00</span></div>
        </div>
        <div className='nav-buttons'>
        <div className='navbar-btn'><img src={plusIcon} />Create</div>
        <div className='navbar-btn'><img src={requestIcon} />Requests</div>
        <div className='navbar-btn'><img src={messageIcon} />Messages</div>
        <div className='navbar-activate-plan'>Activate plan</div>
        <div className='navbar-profile'>AJ</div>
        </div>
    </div>
  )
}

export default Navbar