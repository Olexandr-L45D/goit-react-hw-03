import css from "./SearchBox.module.css"
import { useState } from "react";

export default function SearchBox({ value, onFilter }) {

    const [inputValue, setInputValue] = useState("");

    const handleChange = (evt) => {
        setInputValue(evt.target.value);
        // onFilter(e.target.value)
    };

    return (
        <div className={css.item}>
            <h5 className={css.paragraf}>Finde contacts by name</h5>
            <input type="text" value={inputValue} onChange={handleChange} />
        </div>
    );
};

//<input type="text" value={inputValue} onChange={(e) => onFilter(e.target.value)} />
// export default function Filter({ value, onFilter }) {
//     return (
//         <div>
//             <p >Search by name</p>
//             <input
//                 type="name"
//                 value={value}
//                 onChange={(e) => onFilter(e.target.value)}
//             />
//         </div>
//     );
// }


// add function
// import { useState } from 'react';
// let nextId = 0;
// export default function List() {
//     const [name, setName] = useState('');
//     const [artists, setArtists] = useState([]);
//     return (
//         <>
//             <h1>Inspiring sculptors:</h1>
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
//             <ul>
//                 {artists.map(artist => (
//                     <li key={artist.id}>{artist.name}</li>
//                 ))}
//             </ul>
//         </>
//     );
// }
// Delet function
// import { useState } from 'react';

// let initialArtists = [
//     { id: 0, name: 'Marta Colvin Andrade' },
//     { id: 1, name: 'Lamidi Olonade Fakeye' },
//     { id: 2, name: 'Louise Nevelson' },
// ];

// export default function List() {
//     const [artists, setArtists] = useState(
//         initialArtists
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
