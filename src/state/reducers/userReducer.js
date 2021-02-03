const reducer = (state, action) =>{
  switch(action.type){
    case 'login':
    localStorage.setItem('loggedIn', true);
      return {
        user:action.payload,
        isLoggedIn:localStorage.getItem('loggedIn')
      };
    case 'logout':
      return localStorage.removeItem('loggedIn');
    default:
      return state;
    }
}
export default reducer;