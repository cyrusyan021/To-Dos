import { GET_ITEM_REQUEST, GET_ITEM_SUCCESS, GET_ITEM_ERROR, ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM, CLEAR_COMPLETED_ITEM } from './actions';
import { addItemToTodo, updateTodoItem, removeItemFromTodo, clearCompletedItemsFromTodo } from './utils';

export const INITIAL_STATE = {
  isFetched: false, // to record whether data has already been fetched
  isLoading: false,
  isError: false,
  todoItems: [],
}

export const todoReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_ITEM_SUCCESS:
      return {
        ...state,
        isFetched: true,
        isLoading: false,
        isError: false,
        todoItems: addItemToTodo(state.todoItems, action.payload),
      };

    case GET_ITEM_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case ADD_ITEM:
      return {
        ...state,
        todoItems: addItemToTodo(state.todoItems, action.payload),
      };

    case UPDATE_ITEM:
      return {
        ...state,
        todoItems: updateTodoItem(state.todoItems, action.payload),
      }

    case REMOVE_ITEM:
      return {
        ...state,
        todoItems: removeItemFromTodo(state.todoItems, action.payload),
      };

    case CLEAR_COMPLETED_ITEM:
      return {
        ...state,
        todoItems: clearCompletedItemsFromTodo(state.todoItems),
      };

    default:
      return state;
  }
}