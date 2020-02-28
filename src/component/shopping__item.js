import React from 'react';

const ShopBasket = (props) => {

  const { amount } = props

  const handShowCart = (e) => {
    document.getElementsByClassName("shopping__cart")[0].style.right = "0px";
    document.getElementsByClassName("shopping__cart")[0].style.visibility = "visible";
    document.getElementsByClassName("shopping__cart")[0].style.width = "450px";
  }

  return (
    <div className="shopping__item">
      <a href="#" onClick={handShowCart}>
        <i className="fas fa-shopping-bag" />
      </a>
      <span>
        <p>{amount}</p>
      </span>
    </div>
  )
}

export default ShopBasket