const InitialState={
    AllTodos:[{title:'FirstTodo',Completed:false,PrepareToChanged:false,Weather:[]},{title:'azz',Completed:false,PrepareToChanged:false,Weather:[]}],
    DoneTodos:[],
    NotDoneTodos:[],
  AddTodoPopUpActive:false,
  isActive:false,
  Coords:[],
  Weather:[]
}

export const TodoReducer=(state=InitialState,action)=>{
    switch(action.type){
        case 'ADD_TODO':return {...state,AllTodos:[...state.AllTodos,action.payload]}
        case 'FILTER_TODO':return {...state,AllTodos:action.payload}
        case 'CHANGE_POPUP':return {...state,AddTodoPopUpActive:action.payload}
        case 'DoneTodos':return {...state,DoneTodos:[...state.DoneTodos,action.payload]}
        case 'FILTER_DONE_TODOS':return {...state,DoneTodos:action.payload}
        case 'dsad':return {...state,isActive:action.payload}
        case 'GET_COORDS':return {...state,Coords:action.payload}
        case 'ADD_WEATHER':return {...state,Weather:action.payload}
        default:
            return {...state}
    }
}