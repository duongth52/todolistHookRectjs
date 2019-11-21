import React, {useState} from 'react';

function ToDoForm( { saveTodo}) {

    const [value, setValue] = useState('');

    var onChange = e => {
        setValue(e.target.value);
    }

    var onSubmit = e => {
        e.preventDefault();
        saveTodo(value);
        setValue('');
    }

  return (
    <form onSubmit={onSubmit}>
        <input placeholder='Title todo ...' value={value} onChange={ onChange} />
    </form>
  );
}

export default ToDoForm;
