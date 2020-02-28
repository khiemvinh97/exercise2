import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem ,selectLoading } from '../action/action'

const ToDoList = (props) => {

  const dispatch = useDispatch();
  const { items } = props
  const data = useSelector(state => state.cartItem)
  const loading = useSelector(state => state.loading)

  useEffect(() => {
    setTimeout(() =>
      dispatch(selectLoading(true))
      , 300)
  })


  if (!loading) {
    return (
      <div className="loader"></div>
    )
  }
  else {
    return (
      <React.Fragment>
        {items.map((item, index) =>
          <div className="product__item" key={item.id}>
            <div className="product__img">
              <img className="img" src={`${item.img}`}></img>
            </div>
            <div className="product__name">
              <p>{item.name}</p>
            </div>
            <div className="product__span">
              <span />
            </div>
            <div className="product__price">
              <p>
                $<span>{parseFloat(item.price).toFixed(2)}</span>
              </p>
              <p className="-info">or 9 x ${parseFloat(item.price / 9).toFixed(2)}</p>
            </div>
            <div className="product__button" >
              <a href="#"
                onClick={(e) => addCart(e, data, item, dispatch)}
              >Add to cart</a>
            </div>
            <div className="product__ship">
              <p>Free shiping</p>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }

}

export default ToDoList


const checkInclude = (data, item) => {
  let bool = false
  data.forEach(dataItem => {
    if (dataItem.item.id === item.id)
      bool = true
  });
  return bool
}

const addCart = (e, data, item, dispatch) => {
  {
    e.preventDefault();
    if (data.length === 0) {
      dispatch(addItem(item))
    }
    else if (!checkInclude(data, item)) {
      dispatch(addItem(item))
    }
    else {
      dispatch(updateItem(item.id))
    }
    document.getElementsByClassName("shopping__cart")[0].style.right = "0px";
    document.getElementsByClassName("shopping__cart")[0].style.visibility = "visible";
    document.getElementsByClassName("shopping__cart")[0].style.width = "450px";
  }
}
