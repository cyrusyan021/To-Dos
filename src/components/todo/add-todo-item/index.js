import React, { useState, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoItemContainer from 'components/todo/todo-item-container';
import Button from 'controls/button';
import Input from 'controls/form/input';

import { AddIcon } from 'assets/icons';
import { checkEnterOnPress } from 'utilities/form';

import { useAddTodoItemAction } from 'redux/todo/actions';

const AddTodoItem = () => {
  const [itemName, setItemName] = useState('');

  const addTodoItem = useAddTodoItemAction();

  const addItemOnClick = () => {
    addTodoItem({ id: uuidv4(), name: itemName, isCompleted: false });
    setItemName('');
  }

  const itemNameOnChange = (event) => {
    setItemName(event.target.value);
  }

  const itemNameOnKeydown = (event) => {
    if (checkEnterOnPress(event) && itemName) {
      event.target.blur();
      addItemOnClick();
    }
  }

  return (
    <TodoItemContainer>
      <Button
        buttonType="icon"
        onClick={ addItemOnClick }
        disabled={ !itemName }
      >
        <AddIcon />
      </Button>
      <Input
        className="margin-left--sm todo-item__input"
        value={ itemName }
        placeholder="Add Item..."
        onChange={ itemNameOnChange }
        onKeyDown={ itemNameOnKeydown }
      />
    </TodoItemContainer>
  );
}

export default memo(AddTodoItem);