import React, { memo } from 'react';

import AddTodoItem from 'components/todo/add-todo-item';
import TodoItem from 'components/todo/todo-item';

import { useTodoActiveItemsCountSelector } from 'redux/todo/selectors';

const TodoList = ({ className="", todoItems }) => {
  const activeTodoItemsCount = useTodoActiveItemsCountSelector();

  return (
    <div className={ className }>
      <div className="font--italic margin-bottom--xsm">
        { `${ activeTodoItemsCount } item${ activeTodoItemsCount === 1 ? '' : 's' } left` }
      </div>
      <AddTodoItem />
      { todoItems.map((t, idx) => (
        <TodoItem
          key={ `todo-item__${ idx }` }
          item={ t }
        />
      )) }
    </div>
  );
}

export default memo(TodoList);