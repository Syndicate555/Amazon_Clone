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
    <img src="https://www.guru3d.com/index.php?ct=news&action=file&id=39952" alt=""/>
    <button>Add to Basket</button>
   </div>
  </div>
 )
}

export default Product
