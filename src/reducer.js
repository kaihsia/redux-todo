import { List, Map } from 'immutable';

const init = List([]);

export default function(todos=init, action) {
  switch(action.type) {
    // ADD_TODO
    case 'ADD_TODO':
      return todos.push(Map(action.payload));
    // TOGGLE_TODO
    case 'TOGGLE_TODO':
      return todos.map(t => {
        if (t.get('id') === action.payload) {
          return t.update('isDone', isDone => !isDone);
        } else {
          return t;
        }
      });
    // DELETE_TODO
    case 'DELETE_TODO':
      const deleteTodo = action.payload;
      return todos.filter(todo => todo.get('id') !== deleteTodo);
    // EDIT_TODO
    case 'EDIT_TODO':
      const edited = action.payload.text;
      return todos.map(t => {
        if (t.get('id') === action.payload.id) {
          return t.update('text', text => action.payload.text);
        } else {
          return t;
        }
      });
    default:
      return todos;
  }
}