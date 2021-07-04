import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './index.css';

const TodoItemContainer = ({ isCompleted, children }) => {
  return (
    <div className={ `todo-item ${ isCompleted ? "todo-item--completed" : "" }` }>
      { children }
    </div>
  );
}

TodoItemContainer.propTypes = {
  isCompleted: PropTypes.bool,
  children: PropTypes.node,
}

TodoItemContainer.defaultProps = {
  isCompleted: false,
  children: <></>,
}

export default memo(TodoItemContainer);