const InitialState = {
  AllTodos: [],
  DoneTodos: [],
  NotDoneTodos: [],
  AddTodoPopUpActive: false,
  isActive: true,
};
const ADD_TODO='ADD_TODO'
const FILTER_TODO='FILTER_TODO'
const CHANGE_POPUP='CHANGE_POPUP'
const DoneTodos='DoneTodos'
const FILTER_DONE_TODOS='FILTER_DONE_TODOS'
const dsad='dsad'
export const TodoReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, AllTodos: [...state.AllTodos, action.payload] };
    case FILTER_TODO:
      return { ...state, AllTodos: action.payload };
    case CHANGE_POPUP:
      return { ...state, AddTodoPopUpActive: action.payload };
    case DoneTodos:
      return { ...state, DoneTodos: [...state.DoneTodos, action.payload] };
    case FILTER_DONE_TODOS:
      return { ...state, DoneTodos: action.payload };
    case dsad:
      return { ...state, isActive: action.payload };
    default:
      return { ...state };
  }
};
