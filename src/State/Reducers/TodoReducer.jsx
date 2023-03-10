const InitialState={
    Todos:[]
}

export const TodoReducer=(state=InitialState,action)=>{
    switch(action.type){
        case 'ADD_TODO':return {...state,Todos:[...state.Todos,action.payload]}
        default:
            return {...state}
    }
}