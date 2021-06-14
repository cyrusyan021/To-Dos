import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

// base selectors
const todoSelector = (state) => state.todo;
const todoIsFetchedSelector = createSelector(todoSelector, (todo) => todo.isFetched);
const todoIsLoadingSelector = createSelector(todoSelector, (todo) => todo.isLoading);
const todoIsErrorSelector = createSelector(todoSelector, (todo) => todo.isError);
const todoItemsSelector = createSelector(todoSelector, (todo) => todo.todoItems);

export const useTodoIsFetchedSelector = () => {
  const selector = useMemo(() => todoIsFetchedSelector, []);

  return useSelector(selector);
}

export const useTodoIsLoadingSelector = () => {
  const selector = useMemo(() => todoIsLoadingSelector, []);

  return useSelector(selector);
}

export const useTodoIsErrorSelector = () => {
  const selector = useMemo(() => todoIsErrorSelector, []);

  return useSelector(selector);
}

export const useTodoItemsSelector = () => {
  const selector = useMemo(() => (
    createSelector(
      todoItemsSelector,
      (todoItems) => todoItems.sort((a, b) =>  (
        a.isCompleted && b.isCompleted
          ? 0
          : !a.isCompleted && b.isCompleted
            ? -1
            : 1
      ))
    )
  ), []);

  return useSelector(selector);
}

export const useTodoActiveItemsSelector = () => {
  const selector = useMemo(() => (
    createSelector(
      todoItemsSelector,
      (todoItems) => todoItems.filter(i => !i.isCompleted),
    )
  ), []);

  return useSelector(selector);
}

export const useTodoActiveItemsCountSelector = () => {
  const selector = useMemo(() => (
    createSelector(
      todoItemsSelector,
      (todoItems) => todoItems.filter(i => !i.isCompleted).length,
    )
  ), []);

  return useSelector(selector);
}

export const useTodoCompletedItemsSelector = () => {
  const selector = useMemo(() => (
    createSelector(
      todoItemsSelector,
      (todoItems) => todoItems.filter(i => i.isCompleted),
    )
  ), []);

  return useSelector(selector);
}

export const useTodoCompletedItemsCountSelector = () => {
  const selector = useMemo(() => (
    createSelector(
      todoItemsSelector,
      (todoItems) => todoItems.filter(i => i.isCompleted).length,
    )
  ), []);

  return useSelector(selector);
}