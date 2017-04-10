import { connect } from 'react-redux';
import * as components from './component';
import { addTodo, toggleTodo, deleteTodo, editTodo } from './actions';

const mapStateToProps = (state) => {
  return { todos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo : text => dispatch(addTodo(text)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    editTodo: (id, text) => dispatch(editTodo(id,text))
  };
};

export const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(components.TodoList);