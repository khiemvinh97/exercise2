const cartItem = (state = [], action) => {
  switch (action.type) {
    case 'ADD__CART': 
        return [...state, {
          item: action.item
        }]
    case 'DELETE__CART':
      return state.filter((item) => item.item.id !== action.id)
    case 'UPDATE__CART':
      return state.map((itemData)=> itemData.item.id === action.id ? { ...itemData, Quantity : itemData.item.Quantity++} : itemData )
    default:
      return state
  }
}

export default cartItem