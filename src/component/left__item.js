import React,{useEffect,useState} from 'react';
import { selectSize, selectLoading } from '../action/action'
import { useDispatch, useSelector } from 'react-redux';
import {setSize} from '../action/action'

const LeftItem = (props) => {



  useEffect(
    () => {
      fetch('http://localhost:3001/size')
        .then(res => res.json())
        .then((datas) => {
            dispatch(setSize(datas))
        }).catch(err => console.error(err));
    },[])
  const size = useSelector(state => state.size)
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <div className="left__item">
        <div className="left__text">
          <h4>Sizes:</h4>
        </div>
        <div className="left__size">
          <CheckLink size={size} dispatch={dispatch} />
        </div>
        <div className="left__note">
          <p>Leave a star on Github if this repository was useful :)</p>
          <button>
            <i className="fab fa-github" />
            Star
      </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LeftItem

const CheckLink = (props) => {
  const { size, dispatch } = props
  return (
    size.map((item, index) => {
      if (item.check) {
        return (
          <a className="-active" href="#" key={index} onClick={(e) => {
            e.preventDefault();
            dispatch(selectSize(item.size))
            dispatch(selectLoading(false))
          }}>
            <span>{item.size}</span>
          </a>
        )
      }
      else {
        return (
          <a href="#" key={index} onClick={(e) => {
            e.preventDefault();
            dispatch(selectSize(item.size))
            dispatch(selectLoading(false))
          }}>
            <span>{item.size}</span>
          </a>
        )
      }
    }
    )
  )

}