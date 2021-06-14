import { INITIAL_STATE, todoReducer } from 'redux/todo/reducer';
import { GET_ITEM_REQUEST, GET_ITEM_SUCCESS, GET_ITEM_ERROR, ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM, CLEAR_COMPLETED_ITEM } from 'redux/todo/actions';
import { addItemToTodo, updateTodoItem, removeItemFromTodo, clearCompletedItemsFromTodo } from 'redux/todo/utils';

describe('todo reducer.js', () => {
  it('should render initial state correctly', () => {
    expect(todoReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle GET_ITEM_REQUEST', () => {
    const action = { type: GET_ITEM_REQUEST };
    expect(todoReducer(undefined, action)).toEqual({ ...INITIAL_STATE, isLoading: true });
  });

  it('should handle GET_ITEM_SUCCESS', () => {
    const data = [{ id: 'testing-id', name: 'testing-name', isCompleted: false }];
    const action = { type: GET_ITEM_SUCCESS, payload: data };
    expect(todoReducer(undefined, action)).toEqual({ ...INITIAL_STATE, isFetched: true, isLoading: false, isError: false, todoItems: addItemToTodo(INITIAL_STATE.todoItems, data) });
  });

  it('should handle GET_ITEM_ERROR', () => {
    const action = { type: GET_ITEM_ERROR };
    expect(todoReducer(undefined, action)).toEqual({ ...INITIAL_STATE, isLoading: false, isError: true });
  });

  it('should handle ADD_ITEM', () => {
    const data = { id: 'testing-id', name: 'testing-name', isCompleted: false };
    const action = { type: ADD_ITEM, payload: data };
    expect(todoReducer(undefined, action)).toEqual({ ...INITIAL_STATE, todoItems: addItemToTodo(INITIAL_STATE.todoItems, data) });
  });

  it('should handle UPDATE_ITEM', () => {
    const initialState = { todoItems: [{ id: 'testing-id', name: 'testing-name', isCompleted: false }] };
    const data = { id: 'testing-id', name: 'updated-testing-name', isCompleted: true };
    const action = { type: UPDATE_ITEM, payload: data };
    expect(todoReducer(initialState, action)).toEqual({ ...initialState, todoItems: updateTodoItem(initialState.todoItems, data) });
  });

  it('should handle REMOVE_ITEM', () => {
    const initialState = { todoItems: [{ id: 'testing-id', name: 'testing-name', isCompleted: false }] };
    const data = { id: 'testing-id', name: 'testing-name', isCompleted: false };
    const action = { type: REMOVE_ITEM, payload: data };
    expect(todoReducer(initialState, action)).toEqual({ ...initialState, todoItems: removeItemFromTodo(initialState.todoItems, data) });
  });

  it('should handle CLEAR_COMPLETED_ITEM', () => {
    const initialState = {
      todoItems: [
        { id: 'testing-id__1', name: 'testing-name__1', isCompleted: true },
        { id: 'testing-id__2', name: 'testing-name__2', isCompleted: false },
        { id: 'testing-id__3', name: 'testing-name__3', isCompleted: true },
      ],
    };
    const updatedState = {
      todoItems: [
        { id: 'testing-id__2', name: 'testing-name__2', isCompleted: false },
      ],
    };
    const action = { type: CLEAR_COMPLETED_ITEM };
    expect(todoReducer(updatedState, action)).toEqual({ ...initialState, todoItems: clearCompletedItemsFromTodo(initialState.todoItems) });
  });
});