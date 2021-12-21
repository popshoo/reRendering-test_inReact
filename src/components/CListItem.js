import { useState } from 'react';

const CListItem = ({word, onRemove}) => {
    console.log('Rendering CListItem...')
    const [quality, setQuality] = useState(1);
    return (
        <li>
        {word}
        <input
            type="number"
            value={quality}
            onChange={e => setQuality(e.target.value)} />
        <button onClick={onRemove}>Remove</button>
        </li>
    );
}

export default CListItem;