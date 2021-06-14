const removeEmptyItem = (updatedTodos) => {
  return updatedTodos.filter(t => t.name.trim());
}

export const addItemToTodo = (todos, newItem) => {
  return removeEmptyItem(
    (Array.isArray(newItem) ? newItem.concat(todos) : [newItem].concat(todos))
  );
}

export const updateTodoItem = (todos, updatedItem) => {
  return removeEmptyItem(
    todos.map(t => t.id === updatedItem.id ? updatedItem : t)
  );
}

export const removeItemFromTodo = (todos, itemToRemove) => {
  return todos.filter(t => t.id !== itemToRemove.id);
}

export const clearCompletedItemsFromTodo = (todos) => {
  return todos.filter(t => !t.isCompleted);
}