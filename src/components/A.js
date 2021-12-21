import { useState } from 'react';
import AChild1 from './AChild1';
import AChild2 from './AChild2';

const A = ({message}) => {
    const [name,setName] = useState('Robert');
    console.log('Rendering A...')
    return (
        <>
            <h1>I'AM A</h1>
            <p>Name Is: {name}</p>
            <button onClick={() => setName(name.split('').reverse().join(''))}>reverse Name</button>
            <AChild1 name={name} message={message}/>
            <AChild2 />
        </>
    );
}

export default A;