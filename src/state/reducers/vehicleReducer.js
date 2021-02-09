const reducer = (state=[], action) =>{
  switch(action.type){
    case 'init':
      return action.payload;
    case 'add':
        return state.concat(action.payload);
    case 'edit':
        const {id} = action.payload;
        return state.map(comp=>comp.id === id ? action.payload : comp);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
    }
}
export default reducer;