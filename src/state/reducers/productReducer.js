const reducer = (state, action) =>{
  switch(action.type){
    case 'init':
      return action.payload.map(product=>({...product,picture:`http://localhost:8000/${product.picture}`}));
    case 'add':
        return state.concat({...action.payload, picture:`http://localhost:8000/${action.payload.picture}`});
    case 'edit':
        const {id} = action.payload;
        return state.map(comp=>comp.id === id ? action.payload : comp);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
    }
}
export default reducer;