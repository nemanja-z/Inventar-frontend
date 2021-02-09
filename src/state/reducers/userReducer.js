const reducer = (state, action) =>{
  switch(action.type){
    case 'login':
      localStorage.setItem('user', JSON.stringify(action.payload));
      return action.payload
    case 'logout':
      localStorage.removeItem('user');
      return {};
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
    }
}
export default reducer;