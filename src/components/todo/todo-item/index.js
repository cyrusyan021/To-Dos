import React, { memo } from 'react';
import PropTypes from 'prop-types';

import TodoItemContainer from 'components/todo/todo-item-container';
import Button from 'controls/button';
import Checkbox from 'controls/checkbox';
import Input from 'controls/input';

import { TrashIcon } from 'assets/icons';

import { useUpdateTodoItemAction, useRemoveTodoItemAction } from 'redux/todo/actions';

export const TODO_ITEM_PROP_TYPES = PropTypes.exact({
  id: PropTypes.string,
  name: PropTypes.string,
  isCompleted: PropTypes.bool,
});

const TodoItem = ({ item }) => {
  const updateTodoItem = useUpdateTodoItemAction();
  const removeTodoItem = useRemoveTodoItemAction();

  const itemCompleteOnChange = () => {
    updateTodoItem({ ...item, isCompleted: !item.isCompleted });
  }

  const itemNameOnChange = (updatedName) => {
    updateTodoItem({ ...item, name: updatedName });
  }

  const removeItem = () => {
    removeTodoItem(item);
  }

  return (
    <TodoItemContainer isCompleted={ item.isCompleted }>
      <Checkbox
        className="todo-item__checkbox"
        isChecked={ item.isCompleted }
        onClick={ itemCompleteOnChange }
      />
      <Input
        className="margin-left--sm todo-item__input"
        initialValue={ item.name }
        placeholder="Update Item"
        disabled={ item.isCompleted }
        onBlur={ itemNameOnChange }
      />
      <Button
        className="todo-item__remove-button"
        buttonType="icon"
        onClick={ removeItem }
      >
        <TrashIcon />
      </Button>
      { item.isCompleted && (
        <div className="todo-item__line horizontal-line--grey" />
      ) }
    </TodoItemContainer>
  );
}

TodoItem.propTypes = {
  item: TODO_ITEM_PROP_TYPES,
}

TodoItem.defaultProps = {
  item: {},
}

export default memo(TodoItem);