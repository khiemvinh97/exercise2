export const addItem = (item) => {
  return {
    type: 'ADD__CART',
    item
  }
}
export const deleteItem = (id) => {
  return {
    type: 'DELETE__CART',
    id
  }
}
export const updateItem = (id) => {
  return {
    type: 'UPDATE__CART',
    id
  }
}

export const sortItem = (howSort) => {
  return {
    type: 'SORT__ITEM',
    howSort
  }
}

export const setProduct = (product) => {
  return {
    type: 'SET_PRODUCT',
    product
  }
}

export const setSize = (size) => {
  return {
    type: 'SET_SIZE',
    size
  }
}

export const selectSize = (size) => {
  return {
    type: 'SELECT_SIZE',
    size
  }
}

export const selectLoading = (bool) => {
  return {
    type: 'SELECT__LOADING',
    bool
  }
}

