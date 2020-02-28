import React from 'react';
import ShopBasket from './shopping__item'
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../action/action'


const ShopCart = (props) => {
  const handleShowOff = (e) => {
    e.preventDefault();
    document.getElementsByClassName("shopping__cart")[0].style.right = "-552px";
    document.getElementsByClassName("shopping__cart")[0].style.visibility = "hidden";
    document.getElementsByClassName("shopping__cart")[0].style.width = "0";
  }

  const data = useSelector(state => state.cartItem)
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <ShopBasket amount={data.length} />
      <div className="shopping__cart">
        <div className="cancel__cart" >
          <a href="#" onClick={handleShowOff}><i className="fas fa-times" /></a>
        </div>
        <ShopBasket amount={data.length} />
        <div className="cart__item__div">
          {
            data.map((itemData, index) => {
              let item = itemData.item
              return (
                <div className="cart__item" key={index}>
                  <div className="cart__img">
                    <img className="img" src={`${item.img}`} />
                  </div>
                  <div className="cart__info">
                    <div className="cart__name">
                      <p>{item.name}</p>
                    </div>
                    <div className="cart__size">
                      <p>{item.size} | Black with custom print</p>
                    </div>
                    <div className="cart__quantity">
                      <p>Quantity : {item.Quantity}</p>
                    </div>
                  </div>
                  <div className="cart__price">
                    <p>$ {parseFloat(item.price).toFixed(2)}</p>
                  </div>
                  <div className="cart__delete">
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      dispatch(deleteItem(item.id))
                    }}
                      onMouseOver={(e) => mouseOver(e, index)}
                      onMouseOut={(e) => mouseOut(e, index)}>
                      <i className="fa fa-times" />
                    </a>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="foot__cart">
          <div className="sum__cart">
            <h4>SUBTOTAL</h4>
            <div className="sum_price">
              <span>${sumMoney(data)}</span>
              <p>OR UP TO 9 x {parseFloat(sumMoney(data) / 9).toFixed(2)}</p>
            </div>
          </div>
          <div className="sum__button">
            <a href="#">CHECKOUT</a>
          </div>
        </div>
      </div>
    </React.Fragment>

  );
}

export default ShopCart


const sumMoney = (data) => {
  let sum = 0;
  data.map((itemData, index) => {
    let item = itemData.item
    sum += parseFloat(item.price) * item.Quantity
  })
  return sum.toFixed(2);
}

const mouseOver = (e, index) => {
  e.preventDefault();
  document.getElementsByClassName("cart__item")[index].style.backgroundColor = "#0c0b10"
  document.getElementsByClassName("cart__item")[index].style.opacity = "0.5"
  document.getElementsByClassName("cart__name")[index].style.textDecoration = "line-through"
  document.getElementsByClassName("cart__size")[index].style.textDecoration = "line-through"
  document.getElementsByClassName("cart__quantity")[index].style.textDecoration = "line-through"
  document.getElementsByClassName("cart__price")[index].style.textDecoration = "line-through"
}

const mouseOut = (e, index) => {
  {
    e.preventDefault();
    document.getElementsByClassName("cart__item")[index].style.backgroundColor = "#1b1720"
    document.getElementsByClassName("cart__item")[index].style.opacity = "1"
    document.getElementsByClassName("cart__name")[index].style.textDecoration = "none"
    document.getElementsByClassName("cart__size")[index].style.textDecoration = "none"
    document.getElementsByClassName("cart__quantity")[index].style.textDecoration = "none"
    document.getElementsByClassName("cart__price")[index].style.textDecoration = "none"

  }
}