import {combineReducers} from 'redux';
import cartItem from './cart'
import sort from './sort'
import size from './size'
import loading from './loading'
import product from './product'

const allReducers = combineReducers({
  cartItem : cartItem,
  sort,
  size,
  loading,
  product
})

export default allReducers