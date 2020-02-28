
const product = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCT' :
      return action.product
    default:
      return state
  }
}

export default product
