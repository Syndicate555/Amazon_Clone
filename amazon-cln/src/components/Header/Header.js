import React from 'react'

function Header() {
 return (
  <div className= 'header'>
   <img className = "header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
   <div className='header_search'>
    <input type="text" className = "header_searchInput"/>
   </div>
   <div className = 'header_nav'>
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
   </div>
  </div>
 )
}

export default Header
