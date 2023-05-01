import React, {useState} from 'react'
import Scrollbars from 'react-custom-scrollbars-2';
import './cart.css';
import Items from './Items';
import {products} from "./products";


const Cart = () => {
  

  const [item, SetItem]= useState(products)
    return (
        <>
          <header>
              <div className="continue-shopping">
                 <img src="./images/68037_119_w1-6_s_lg.gif" alt="arrow" width="300px" height="300px" className="arrow-icon " />
                 <h3>continue shopping</h3>
              </div>

              <div className="cart-icon">
                  <img src="./images/images.png"  alt="cart" />
                  <p>7</p>

              </div>

          </header>

          <section className="main-cart-section">
              <h1>Shopping Cart</h1>
              <p className="total-items">you have <span className="total-items-count">7 </span> items in shopping cart</p>

              <div className="cart-items">

                  <div className="cart-items-container">
                    
                    <Scrollbars>
                         {
                            item.map((currentItem) => {
                              return <Items key={currentItem.id}{...currentItem} />

                        
                           })
                          }
                          </Scrollbars>

                         

                   


                 
                  </div>
                </div>
                


                <div className="card-total">
                  <h3>Card Total : <span>2200rs {SetItem}</span></h3>
                  <button>checkout</button>

                </div>
            </section>
             
        </>
    )
}

export default Cart
