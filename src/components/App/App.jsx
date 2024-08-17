
import css from './App.module.css'
import React, { useState, useEffect } from "react";
// import { Formik } from 'formik';
import Description from "../Description/Description"
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import FeedbackForm from "../Contact/Contact"

import RadioButn from "../RadioButn/RadioButn"


export default function App() {

  const [clicks, setValues] = useState(() => {
    const savClicks = window.localStorage.getItem("m-click");
    return savClicks !== null ? JSON.parse(savClicks) : 0;
  });
  const handleName = (name) => {
    // Виконуємо необхідні операції з даними
    console.log(name);
  };
  useEffect(() => {
    window.localStorage.setItem("m-click", JSON.stringify(clicks));
  }, [clicks]);
  return (
    <div className={css.container}>
      <>
        <Description />
        <ContactForm onName={handleName} />
        <SearchBox />
        < FeedbackForm />
        <div className="css.item">
          <RadioButn />
        </div>
      </>

    </div>
  )
}


// Колбек-функція для обробки сабміту форми
// const handleLogin = (userData) => {
//   // Виконуємо необхідні операції з даними
//   console.log(userData);
// };

// return (
//   <div>
//     <h1>Please login to your account!</h1>
//     {/* Передаємо колбек як пропс форми */}
//     <LoginForm onLogin={handleLogin} />
//   </div>
// );

