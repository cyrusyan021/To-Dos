import React, { useCallback, useEffect } from 'react';

import Todo from 'components/todo';
import ErrorAlert from 'controls/error-alert';
import Spinner from 'controls/spinner';

import { useGetTodoItemRequestAction } from 'redux/todo/actions';
import { useTodoIsFetchedSelector, useTodoIsLoadingSelector, useTodoIsErrorSelector } from 'redux/todo/selectors';

const TodoPage = () => {
  const todoIsFetched = useTodoIsFetchedSelector();
  const todoIsLoading = useTodoIsLoadingSelector();
  const todoIsErorr = useTodoIsErrorSelector();

  const getTodoItemRequest = useGetTodoItemRequestAction();

  const fetchAllTodos = useCallback(() => {
    if (!todoIsFetched && !todoIsLoading) {
      getTodoItemRequest();
    }
  }, [todoIsFetched, todoIsLoading, getTodoItemRequest]);

  useEffect(() => {
    fetchAllTodos();
  }, [fetchAllTodos]);

  return (
    <div className="page__container">
      { todoIsLoading ? (
        <Spinner />
      ) : todoIsErorr ? (
        <ErrorAlert />
      ) : (
        <Todo />
      ) }
    </div>
  );
}

export default TodoPage;