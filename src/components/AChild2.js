import { memo } from 'react';

const AChild2 = memo(({name}) => {
    console.log('Rendering AChild2');

    return (
        
        <h1>AChild2 = Name is {name}</h1>
        
    );
})

export default AChild2;