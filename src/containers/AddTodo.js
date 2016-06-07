import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
          input = node;
        }} />
      <button onClick={() => {
          dispatch(addTodo(input.value));
          input.value = '';
        }}>
        Add Todo
      </button>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

AddTodo = connect()(AddTodo);

export default AddTodo;
