import { store } from 'redux/store';

describe('redux store', () => {
  it('create Store with correct initial state of Root Reducer', () => {
    expect(store.getState().todo.isFetched).toEqual(false);
    expect(store.getState().todo.isLoading).toEqual(false);
    expect(store.getState().todo.isError).toEqual(false);
    expect(store.getState().todo.todoItems).toEqual([]);
  });
});