import React, { useState } from 'react';
import '../stylesheets/input.css';
import { v4 as uuidv4 } from 'uuid';

const Input = (props) => {
  const [input, setInput] = useState('');

  const manejarCambio = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value);
  };

  const clearInput = () => {
    document.querySelector('.input__text').value = '';
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    // console.log('tarea enviada');

    const newTask = {
      id: uuidv4(),
      text: input,
      completeTask: false,
    };

    props.onSubmit(newTask);
    clearInput();
    // console.log(newTask);
  };

  return (
    <form className='input' onSubmit={manejarEnvio}>
      <input
        className='input__text'
        type='text'
        placeholder='Write your ideas ;)'
        onChange={manejarCambio}
      />
      <button className='btn btn-agregar'>Agregar Tarea</button>
    </form>
  );
};

export default Input;
