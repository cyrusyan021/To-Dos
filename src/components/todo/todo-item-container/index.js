import React, { memo } from 'react';

import './index.css';

const TodoItem = ({ item={}, children }) => {
  return (
    <div className={ `todo-item ${ item.isCompleted ? "todo-item--completed" : "" }` }>
      { children }
    </div>
  );
}

export default memo(TodoItem);