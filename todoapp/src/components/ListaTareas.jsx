import React, { useEffect, useState } from 'react';
import Tarea from './Tarea';
import Input from './Input';
import '../stylesheets/lista-tareas.css';

let fondos = [
  'https://www.xtrafondos.com/wallpapers/atardecer-morado-416.jpg',
  'https://www.xtrafondos.com/wallpapers/muele-de-madera-frente-al-mar-al-atardecer-9896.jpg',
  'https://www.xtrafondos.com/wallpapers/retrowave-puesta-del-sol-3062.jpg',
  'https://www.xtrafondos.com/wallpapers/platicas-al-atardecer-5182.jpg',
  'https://www.xtrafondos.com/wallpapers/bote-en-medio-del-mar-al-atardecer-8885.jpg',
  'https://www.xtrafondos.com/wallpapers/chica-anime-viendo-la-ciudad-10383.jpg',
  'https://www.xtrafondos.com/wallpapers/chica-con-guitarra-9035.jpg',
  'https://www.xtrafondos.com/wallpapers/chica-en-columpio-mirando-la-luna-7709.jpg',
  'https://www.xtrafondos.com/wallpapers/ninja-katana-sci-fi-city-neon-lights-5026.jpg',
  'https://www.xtrafondos.com/wallpapers/carretera-en-otono-6185.jpg',
  'https://www.xtrafondos.com/wallpapers/resoluciones/20/noche-con-estrellas_2560x1440_5155.jpg',
];

const numeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeBackgroundImage = () => {
  const $body = document.querySelector('body');
  $body.style.backgroundImage = `url('${
    fondos[numeroAleatorio(0, fondos.length - 1)]
  }')`;
};

const Lista_Tareas = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // console.log('Leer todos local');
    if (localStorage.getItem('tasks')) {
      setTasks(JSON.parse(localStorage.getItem('tasks')));
    }
  }, []);

  // useEffect(() => {
  //   console.log('Guardar todo local');
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }, [tasks]);

  if (tasks.length !== 0) localStorage.setItem('tasks', JSON.stringify(tasks));
  // // localStorage.clear();

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const tasksUpdates = [...tasks, task]; // agregar al inicio de la lista
      setTasks(tasksUpdates);
      changeBackgroundImage();
    }
  };

  const markTask = (id) => {
    const tasksUpdates = tasks.map((task) => {
      if (task.id === id) {
        task.completeTask = !task.completeTask;
      }
      return task;
    });
    setTasks(tasksUpdates);
  };

  const deleteTask = (id) => {
    const tasksUpdates = tasks.filter((task) => task.id !== id);
    setTasks(tasksUpdates);
  };

  const editTask = (id) => {
    const tasksUpdates = tasks.map((task) => {
      if (tasks.id === id) {
        task.text = 'hola';
      }
      return task;
    });
    setTasks(tasksUpdates);
  };

  return (
    <>
      <Input onSubmit={addTask} />
      <h3>My task / My day</h3>
      <div className='tasks'>
        {tasks.map((task) => (
          <Tarea
            key={task.id}
            id={task.id}
            text={task.text}
            completeTask={task.completeTask}
            markCompleteTask={markTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </div>
    </>
  );
};

export default Lista_Tareas;
