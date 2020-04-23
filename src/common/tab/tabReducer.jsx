const INIT_STATE = { selected: '' }

export default (state = INIT_STATE, action) => {
  switch (action) {
    case 'TAB_SELECTED':
      return { ...state, selected: action.payload }
    default:
      return state;
  }
}