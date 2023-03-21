const InitialState={
    AllTodos:[],
    DoneTodos:[],
    NotDoneTodos:[],
  AddTodoPopUpActive:false,
  isActive:true,
}

export const TodoReducer=(state=InitialState,action)=>{
    switch(action.type){
        case 'ADD_TODO':return {...state,AllTodos:[...state.AllTodos,action.payload]}
        case 'FILTER_TODO':return {...state,AllTodos:action.payload}
        case 'CHANGE_POPUP':return {...state,AddTodoPopUpActive:action.payload}
        case 'DoneTodos':return {...state,DoneTodos:[...state.DoneTodos,action.payload]}
        case 'FILTER_DONE_TODOS':return {...state,DoneTodos:action.payload}
        case 'dsad':return {...state,isActive:action.payload}
        default:
            return {...state}
    }
}