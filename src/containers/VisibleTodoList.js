import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
// import { bindActionCreators } from 'redux';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id));
//     }
//   };
// };

const mapDispatchToProps = {
  onTodoClick: toggleTodo
};
//
// OR
//
// // Must change the property name in TodoList
// const mapDispatchToProps = {
//   toggleTodo
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onTodoClick: bindActionCreators(toggleTodo, dispatch)
//   };
// };
//
// // Must change the property name in TodoList
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     toggleTodo: (id) => {
//       dispatch(toggleTodo(id));
//     }
//   };
// };

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
