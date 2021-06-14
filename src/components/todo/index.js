import React, { memo, useCallback, useMemo, useState } from 'react';

import TodoList from './todo-list';
import Pills from 'components/pills';
import Button from 'controls/button';

import { ACTIVE_STATUS, ACTIVE_STATUS_OPTIONS } from 'constants/todo';

import { useClearCompletedTodoItemsAction } from 'redux/todo/actions';
import { useTodoItemsSelector, useTodoActiveItemsSelector, useTodoCompletedItemsSelector, useTodoCompletedItemsCountSelector } from 'redux/todo/selectors';

import './index.css';

const Todo = () => {
  const [category, setCategory] = useState(ACTIVE_STATUS.all);

  const todoItems = useTodoItemsSelector();
  const activeTodoItems = useTodoActiveItemsSelector();
  const completedTodoItems = useTodoCompletedItemsSelector();
  const completedTodoItemsCount = useTodoCompletedItemsCountSelector();

  const clearCompletedTodoItems = useClearCompletedTodoItemsAction();

  const _todoItems = useMemo(() => {
    switch (category) {
      case ACTIVE_STATUS.active: { return activeTodoItems; }
      case ACTIVE_STATUS.completed: { return completedTodoItems; }
      case ACTIVE_STATUS.all:
      default: {
        return todoItems;
      }
    }
  }, [category, todoItems, activeTodoItems, completedTodoItems]);

  const categoryOnClick = useCallback((caetgoryId) => {
    setCategory(caetgoryId);
  }, []);

  const clearCompletedItemsOnClick = () => {
    if (window.confirm('Are you sure you want to remove all Completed Items?')) {
      clearCompletedTodoItems();
    }
  }

  return (
    <div className="todo__container">
      <Pills
        options={ ACTIVE_STATUS_OPTIONS }
        activeId={ category }
        pillsOnClick={ categoryOnClick }
      />
      <div className="margin-top--lg flex-center--flex-end">
        <Button
          buttonSize="sm"
          onClick={ clearCompletedItemsOnClick }
          disabled={ !completedTodoItemsCount }
        >
          Clear Completed
        </Button>
      </div>
      <TodoList
        className="margin-top--lg"
        todoItems={ _todoItems }
      />
    </div>
  );
}

export default memo(Todo);