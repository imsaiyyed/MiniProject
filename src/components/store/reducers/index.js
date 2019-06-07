const initialState = {
    cart: []
  };
  function rootReducer(state = initialState, action) {
    switch(action.type){
      case 'INCREMENT':
        console.log('INCREMENT')
      break;
      case 'DECREMENT':
        console.log('DECREMENT')
      break;
      default:
        console.log('DEFAULT')

    }
    return state;
  };
  export default rootReducer;