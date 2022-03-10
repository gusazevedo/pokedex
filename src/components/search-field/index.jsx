import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

export default function Searchfield({}) {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            console.log(inputValue);
        }, 600);
        return () => clearTimeout(handler);
    }, [inputValue])

    return (
        <div className={styles.searchField}>
            <input
                type='search'
                name='search'
                placeholder='Catch your pokémon'
                autoComplete='off'
                onChange={(event) => setInputValue(event.target.value)}
                value={inputValue}
            />
        </div>
    );
}