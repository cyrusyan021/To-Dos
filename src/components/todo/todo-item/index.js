import React, { memo } from 'react';

import TodoItemContainer from 'components/todo/todo-item-container';
import Button from 'controls/button';
import Checkbox from 'controls/checkbox';
import Input from 'controls/input';

import { TrashIcon } from 'assets/icons';

import { useUpdateTodoItemAction, useRemoveTodoItemAction } from 'redux/todo/actions';

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
    <TodoItemContainer item={ item }>
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

export default memo(TodoItem);