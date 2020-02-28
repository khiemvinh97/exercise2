import React, { useState, useEffect } from 'react';
import MainItem from './sort__item'
import ShopCart from './shoping__cart'
import LeftItem from './left__item'
import { useSelector, useDispatch } from 'react-redux';
import {setProduct} from '../action/action'

const MainSec = () => {

  useEffect(
    () => {
      fetch('http://localhost:3001/product')
        .then(res => res.json())
        .then((datas) => {
            dispatch(setProduct(datas))
        }).catch(err => console.error(err));
    },[])

  const dispatch =useDispatch()
  const data = useSelector(state=>state.product)
  const size = useSelector(state => state.size)

  return (
    <React.Fragment>
      <section className="main__section">
        <ShopCart />
        <div className="container">
          <div className="row"> 
            <LeftItem />
            <MainItem items={checkSize(data, size)} />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default MainSec



const checkSize = (data, size) => {
  let correctData = [];
  Boolean = false;
  for (let i in size) {
    if (size[i].check) {
      Boolean = true;
      data.forEach(item => {
        if (item.size === size[i].size) {
          correctData.push(item)
        }
      });
    }
  }
  if (!Boolean) {
    correctData = data
  }
  return correctData
}
