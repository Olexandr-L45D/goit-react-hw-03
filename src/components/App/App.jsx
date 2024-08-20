
import css from './App.module.css'
import React, { useState, useEffect } from "react";
import objects from '../../../tasks.json';
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"

export default function App() {
  const [filter, setFilter] = useState('');
  const [tasks, setTasks] = useState(() => {
    const isLocalStorageData = Boolean(localStorage.getItem('tasks'));

    if (isLocalStorageData) {
      const data = localStorage.getItem('tasks');
      return JSON.parse(data);
    }
    return objects;
  });

  useEffect(() => {
    const isLocalStorData = Boolean(localStorage.getItem('reviews'));
    if (isLocalStorData) {
      const data = localStorage.getItem('reviews');
      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("m-click", JSON.stringify(tasks));
  }, [tasks]);

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

  return (
    <div className={css.container}>
      <>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAdd={addTask} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList tasks={visibleTasks} objects={objects} onDelete={deleteTask} />
      </>
    </div>
  )
}

