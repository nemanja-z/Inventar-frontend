const reducer = (state=[], action) =>{
  switch(action.type){
    case 'init':
      return {...action.payload, picture:`http://localhost:8000/${action.payload.image}`};
    case 'add':
        return state.concat({...action.payload, picture:`http://localhost:8000/${action.payload.image}`});
    case 'edit':
        const {id} = action.payload;
        return state.map(comp=>comp.id === id ? action.payload : comp);
    default:
      return state;
    }
}
export default reducer;