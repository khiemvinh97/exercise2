
const size = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_SIZE':
      return state.map((item) => item.size === action.size ? { ...item, check: !item.check } : item)
    case 'SET_SIZE' :
      return action.size
    default:
      return state
  }
}

export default size

// JSON.parse(localStorage.getItem('database')).size