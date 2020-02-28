const sort = (state = 'Select', action) => {
  switch (action.type) {
    case 'SORT__ITEM' : 
      return action.howSort
    default:
      return state
  }
}

export default sort