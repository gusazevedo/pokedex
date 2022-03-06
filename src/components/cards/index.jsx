import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { asyncGetPokemonInformations, asyncGetPokemonList } from '../../services/api';
import Card from '../card';
import styles from './styles.module.scss';

export default function Cards() {
    const [pokemonList, setPokemonList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    async function getPokemonList() {
        const result = await asyncGetPokemonList();
        await result.data.results.forEach(async (pokemon) => {
            const getPokemonInfo = await asyncGetPokemonInformations(pokemon.name);
            setPokemonList(previousState => [...previousState, getPokemonInfo.data]);
        });
    }

    useEffect(() => {
        getPokemonList();
    }, []);

    return (
        <section className={styles.cardContainer}>
            <h2 onClick={() => setIsModalOpen(true)}>Pokémons</h2>
            <div className={styles.cardGrid}>
                <Card items={pokemonList}/>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
            >
            </Modal>
        </section>
    );
}
