import React from 'react'

function Header() {
 return (
  <div className= 'header'>
   <img className = "header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
   <div className='header_search'>
    <input type="text" className = "header_searchInput"/>
   </div>
   <div className = 'header_nav'>
   <div className = "header_option"></div>
   <div className = "header_option"></div>
   <div className = "header_option"></div>
   </div>
  </div>
 )
}

export default Header
