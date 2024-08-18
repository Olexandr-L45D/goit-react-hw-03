
import css from './App.module.css'
import React, { useState, useEffect } from "react";
import object from '../../../tasks.json';
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"

export default function App() {

  const [tasks, setTasks] = useState(object);

  const [filter, setFilter] = useState('');

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
    // console.log(taskId);
  };
  const visibleTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(filter.toLowerCase()));

  useEffect(() => {
    window.localStorage.setItem("m-click", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={css.container}>
      <>
        <h1>Phonebook</h1>
        <p>{filter}</p>
        <ContactForm onAdd={addTask} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList tasks={visibleTasks} object={object} onAdd={addTask} onDelete={deleteTask} />
      </>

    </div>
  )
}
