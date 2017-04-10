const uid = () => Math.random().toString(34).slice(2)

// Create Item
export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      text: text
    }
  };
}

// Edit Item
export function editTodo(id, text) {
  return {
    type: 'EDIT_TODO',
    payload: {
      id,
      text
    }
  };
}

// Toggle Item
export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  }
}

// Delete Item
export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    payload: id
  };
}