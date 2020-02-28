const cartItem = (state = false, action) => {
  switch (action.type) {
    case 'SELECT__LOADING': 
        return action.bool
    default:
      return state
  }
}

export default cartItem