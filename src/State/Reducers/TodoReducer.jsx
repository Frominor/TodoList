const InitialState={
    AllTodos:[1,2],
    DoneTodos:[1],
    NotDoneTodos:[1,2,3]
}

export const TodoReducer=(state=InitialState,action)=>{
    switch(action.type){
        case 'ADD_TODO':return {...state,Todos:[...state.Todos,action.payload]}
        default:
            return {...state}
    }
}