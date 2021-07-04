import React, { memo } from 'react';
import PropTypes from 'prop-types';

import AddTodoItem from 'components/todo/add-todo-item';
import TodoItem from 'components/todo/todo-item';

import { TODO_ITEM_PROP_TYPES } from 'components/todo/todo-item';

import { useTodoActiveItemsCountSelector } from 'redux/todo/selectors';

const TodoList = ({ className, todoItems }) => {
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

TodoList.propTypes = {
  className: PropTypes.string,
  todoItems: PropTypes.arrayOf(TODO_ITEM_PROP_TYPES),
}

TodoList.defaultProps = {
  className: '',
  todoItems: [],
}

export default memo(TodoList);