import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Location from './assets/location.jpg'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header() {
 return (
  <div className= 'header'>
   <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
   <img className="header__location" src={Location} alt="" />
   
   <div className='header__search'>
    <input type="text" className="header__searchInput" />
    <SearchIcon className = "header__searchIcon"/>
   </div>
   <div className='header_nav'>
    <div className = "header_country">
     <DropdownButton
      alignRight
      title="Canada"
      id="dropdown-menu-align-right"
    
        >
              <Dropdown.Item eventKey="option-1">Canada</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">US</Dropdown.Item>
              <Dropdown.Item eventKey="option-3">UK</Dropdown.Item>
              
      </DropdownButton>
    </div>
    <div className="header_option">
     <span className = "header__optionLineOne">
      Hello Guest
     </span>
     <span className = "header__optionLineTwo">
      Sign In
     </span>
   </div>
    <div className="header_option">
     <span className = "header__optionLineOne">
      Returns
     </span>
     <span className = "header__optionLineTwo">
       & Orders
     </span>
   </div>
    <div className="header_option">
     <span className = "header__optionLineOne">
      Your 
     </span>
     <span className = "header__optionLineTwo">
      Prime
     </span>
    </div>
    <div className= 'header_optionBasket'>
     <ShoppingBasketIcon />
     <span className = "header__optionLineTwo header__basketCount">0</span>
    </div>
   </div>
  </div>
 )
}

export default Header
