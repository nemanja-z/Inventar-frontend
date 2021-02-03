const reducer = (state=[], action) =>{
  switch(action.type){
    case 'init':
      return action.payload;
    case 'edit':
        const {id} = action.payload;
        return state.map(comp=>comp.id === id ? action.payload : comp);
    default:
      return state;
    }
}
export default reducer;