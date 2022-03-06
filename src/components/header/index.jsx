// import pokedex from '../../assets/pokedex.png'
import Searchfield from '../search-field';
import styles from './styles.module.scss';

export default function Header() {
    return (
        <section className={styles.headerContainer}>
            <div className={styles.banner}>
                <h1>Welcome to your <br />Logic Pokédex</h1>
                {/* <img src={pokedex} alt="pokedex" /> */}
            </div>
            <Searchfield />
        </section>
    );
}