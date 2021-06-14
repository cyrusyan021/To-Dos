import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; // to attach unique id for each data row (similar behaviour can be found when data is stored in database)

import { getAllTodosApi } from 'api/endpoints/todo';

export const GET_ITEM_REQUEST = 'GET_ITEM_REQUEST';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_ERROR = 'GET_ITEM_ERROR';
export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_COMPLETED_ITEM = 'CLEAR_COMPLETED_ITEM';

export const useGetTodoItemRequestAction = () => {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch({ type: GET_ITEM_REQUEST });
    getAllTodosApi()
      .then(res => {
        return dispatch({
          type: GET_ITEM_SUCCESS,
          payload: (res || [])
            .slice(0, 10)
            .map(r => ({ id: uuidv4(), name: r.title, isCompleted: r.completed })),
        });
      })
      .catch(__ => {
        return dispatch({ type: GET_ITEM_ERROR });
      });
  }, [dispatch]);
};

export const useAddTodoItemAction = () => {
  const dispatch = useDispatch();

  return useCallback((item) => (
    dispatch({
      type: ADD_ITEM,
      payload: item,
    })
  ), [dispatch]);
};

export const useUpdateTodoItemAction = () => {
  const dispatch = useDispatch();

  return useCallback((item) => (
    dispatch({
      type: UPDATE_ITEM,
      payload: item,
    })
  ), [dispatch]);
};

export const useRemoveTodoItemAction = () => {
  const dispatch = useDispatch();

  return useCallback((item) => (
    dispatch({
      type: REMOVE_ITEM,
      payload: item,
    })
  ), [dispatch]);
};

export const useClearCompletedTodoItemsAction = () => {
  const dispatch = useDispatch();

  return useCallback(() => (
    dispatch({
      type: CLEAR_COMPLETED_ITEM,
    })
  ), [dispatch]);
};