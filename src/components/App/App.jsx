
import css from './App.module.css'
import React, { useState, useEffect } from "react";
import object from '../../../tasks.json';
//import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
// import Filter from '../Filter/Filter';
// import tasks from '../Task/Task';

export default function App() {
  // const [tasks, setTasks] = useState(initialTasks);
  // const [filter, setFilter] = useState('');

  // const addTask = (newTask) => {
  //   setTasks((prevTasks) => {
  //     return [...prevTasks, newTask];
  //   });
  // };

  // const deleteTask = (taskId) => {
  //   setTasks((prevTasks) => {
  //     return prevTasks.filter((task) => task.id !== taskId);
  //   });
  // };

  // const visibleTasks = tasks.filter((task) =>
  //   task.text.toLowerCase().includes(filter.toLowerCase())
  // );

  const [clicks, setValues] = useState(() => {
    const savClicks = window.localStorage.getItem("m-click");
    return savClicks !== null ? JSON.parse(savClicks) : 0;
  });
  const handleName = (name) => {
    console.log(name);
  };
  useEffect(() => {
    window.localStorage.setItem("m-click", JSON.stringify(clicks));
  }, [clicks]);
  return (
    <div className={css.container}>
      <>
        <h1>Phonebook</h1>
        {/* <ContactForm onName={handleName} /> */}
        <SearchBox />
        < ContactList object={object} />

      </>

    </div>
  )
}

{/* <div className="css.item">
          <Form onAdd={addTask} />
          <Filter value={filter} onFilter={setFilter} />
          <TaskList tasks={visibleTasks} onDelete={deleteTask} />
        </div> */}