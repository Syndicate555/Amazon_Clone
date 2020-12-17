import React from 'react'
import './Home.css'
import Product from "../Products/Product"
function Home() {
 return (
  <div className = "home">
   <div className="home__container">
    <img className= "home__image" src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_ENG_PVD6150._CB416179696_.jpg" alt=""/>

    <div className="home__row">
     {/* Product */}
     <Product/>
     <Product/>
     <Product/>
     {/* Product */}
     {/* Product */}
    </div>
    <div className="home__row">
     {/* Product */}
     {/* Product */}
     {/* Product */}

    </div>
     {/* Product */}
     {/* Product */}
     {/* Product */}
     {/* Product */}
     {/* Product */}

   </div>
  </div>
 )
}

export default Home
