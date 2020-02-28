import React, { useState, useEffect } from 'react';
import ToDoList from './todoList'
import { DropdownList } from 'react-widgets'
import { sortItem, selectLoading } from '../action/action'
import { useDispatch, useSelector } from 'react-redux';

const SelectData = (data, sort) => {
  switch (sort) {
    case 'Select':
      return data
    case 'Highest to lowest':
      return data.sort((a, b) => { return b.price - a.price })
    case 'Lowest to higest':
      return data.sort((a, b) => { return a.price - b.price })
    default:
      return "fail"
  }
}

const MainItem = (props) => {

  const { items } = props
  const listDroptem = ['Select', 'Highest to lowest', 'Lowest to higest']
  const listDrop = useSelector(state => state.sort)
  const listSelect = SelectData(items, listDrop)
  const dispatch = useDispatch()


    return (
      <React.Fragment>
        <div className="main__item">
          <div className="main__header">
            <p>{items.length} Products(s) found</p>
            <div className="order__by">
              <p>Order by :</p>
              <DropdownList data={listDroptem} defaultValue={listDrop} style={{ width: "160px" }}
                onChange={(values) => {
                  dispatch(sortItem(values))
                  dispatch(selectLoading(false))
                }
                }
              />
            </div>
          </div>
          <div className="main__product">
            <ToDoList items={listSelect} />
          </div>
        </div>
      </React.Fragment>
    )
  

}

export default MainItem;

{/* <React.Fragment>
      <div className="main__item">
        <div className="main__header">
          <p>{items.length} Products(s) found</p>
          <div className="order__by">
            <p>Order by :</p>
            <DropdownList data={listDroptem} defaultValue="Select" style={{ width: "160px" }}
              onChange={(values) => dispatch(sortItem(values))}
            />
          </div>
        </div>
        <div className="main__product">
            <ToDoList items={listSelect} />
        </div>
      </div>
    </React.Fragment>
   */}