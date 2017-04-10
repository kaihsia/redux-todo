import React from 'react';

export function Todo(props) {
  const { todo } = props;
  return todo.isDone ?  <strike>{todo.text}</strike> : <span>{todo.text}</span>;
}

export function TodoList(props) {
  const { todos, toggleTodo, addTodo, deleteTodo, editTodo } = props;
  
  const toggleClick = id => event => toggleTodo(id);
  const deleteHandler = id => event => deleteTodo(id);
  const editHandler = (id, text) => event => editTodo(id,text);
  
  const onSubmit = (e) => {
    const input = e.target;
    const text = input.value;
    const isEnterKey = (e.which == 13);
    const isLongEnough = text.length > 0;

    if (isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  };

  
  return (
    <div className="todo">
      <input type="text" placeholder="Add an item" onKeyDown={onSubmit}/>
      <ul>
        {
          todos.map((t) => (
            <li key={t.get('id')}>            
              <Todo todo={t.toJS()} />
              <button onClick={editHandler(t.get('id'), t.get('text'))}>Edit</button>
              <button onClick={toggleClick(t.get('id'))}>Done</button>
              <button onClick={deleteHandler(t.get('id'))}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}