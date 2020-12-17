import React from 'react'

function Product() {
 return (
  <div className = "product">
   <div className="product__info">
    <p>The product</p>
    <p className="product__price">
     <small>$</small>
     <strong>19.99</strong>
    </p>
    <div className="product__rating">
     <p>⭐</p>
     <p>⭐</p>
     <p>⭐</p>
     <p>⭐</p>
    </div>
   </div>
  </div>
 )
}

export default Product
