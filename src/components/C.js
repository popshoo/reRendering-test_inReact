import { useState } from "react";
import CListItem from "./CListItem";
const C = () => {
    console.log('Rendering C...')

    const [words,setWords] = useState(['Apple','Banana','Patek Phillie']);
    const [newWord,setNewWord] = useState('');
    
    const addWord = () => {
        if (!words.includes(newWord)){
            
            setWords([newWord, ...words]);
            setNewWord('');
        }
        
    }

    const removeWord = word =>{
        setWords(word.filter(w => w !== word));
    }

    const sortWords = () => {
        setWords(words.slice().sort());
    }
    return (
        <>
        <h1>I'AM C</h1>
        <input 
            placeholder="New Word"
            value={newWord}
            onChange={e => setNewWord(e.target.value)} />
        <button onClick={addWord}>Add Word</button>
        {words.map(word => (
            <CListItem key={word} word={word} onRemove={() => removeWord(word)}/>
        ))}
        <button onClick={sortWords}>Sort words</button>
        </>
    );
}

export default C;