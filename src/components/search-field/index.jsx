import styles from './styles.module.scss';

export default function Searchfield() {
    return (
        <div className={styles.searchField}>
            <input
                type='search'
                name='search'
                placeholder='Catch your pokémon'
                autoComplete='off'
            />
            <button type='button'>Catch!</button>
        </div>
    );
}