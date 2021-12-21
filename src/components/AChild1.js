import { memo } from 'react';

const AChild1 = memo(({name, message, person}) => {
    console.log('Rendering AChild1');

    return (
        
        <h1>AChild1 - name is {name}, message is {message}</h1>
    );
}, (prev,next) => prev.person === next.person.id);

export default AChild1;