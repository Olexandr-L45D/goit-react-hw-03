
import css from './App.module.css'
import React, { useState, useEffect } from "react";
import objects from '../../../tasks.json';
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"

export default function App() {
  const [tasks, setTasks] = useState(objects);
  const [filter, setFilter] = useState('');
  //const [text, setText] = useState('');

  // const handlCheng = (newText) => {
  //   setText(newText);
  // }

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
    console.log(taskId);
  };
  const visibleTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(filter.toLowerCase()));

  // useEffect(() => {
  //   window.localStorage.setItem("m-click", JSON.stringify(tasks));
  // }, [tasks]);

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

//
//  <SearchBox value={text} onUpdate={handlCheng} />
// value={filter}
// add function
// import { useState } from 'react';
// let nextId = 0;
// export default function ContactList() {
//     const [name, setName] = useState('');
//     const [artists, setArtists] = useState([]);
//     return (
//         <>
//             {/* <h1>Inspiring sculptors:</h1> */}
//             <input
//                 value={name}
//                 onChange={e => setName(e.target.value)}
//             />
//             <button onClick={() => {
//                 setArtists([
//                     ...artists,
//                     { id: nextId++, name: name }
//                 ]);
//             }}>Add</button>
//             <ul className={css.list}>
//                 {artists.map(artist => (
//                     <li key={artist.id}>{artist.name}</li>
//                 ))}
//             </ul>
//         </>
//     );
// }
// Delet function
// export default function List() {
//     const [artists, setArtists] = useState(
//         objects
//     );
//     return (
//         <>
//             <h1>Inspiring sculptors:</h1>
//             <ul>
//                 {artists.map(artist => (
//                     <li key={artist.id}>
//                         {artist.name}{' '}
//                         <button onClick={() => {
//                             setArtists(
//                                 artists.filter(a =>
//                                     a.id !== artist.id
//                                 )
//                             );
//                         }}>
//                             Delete
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }

