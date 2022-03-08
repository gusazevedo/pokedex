import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { asyncGetPokemonInformations, asyncGetPokemonList } from '../../services/api';
import Card from '../card';
import ModalContent from '../modal-content';
import styles from './styles.module.scss';

Modal.setAppElement('#root');

export default function Cards() {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    async function getPokemonList() {
        setPokemonList([]);
        const { data } = await asyncGetPokemonList();
        await data.results.forEach( async (pokemon) => {
            const getPokemonInfo = await asyncGetPokemonInformations(pokemon.name);
            setPokemonList(previousState => [...previousState, getPokemonInfo.data]);
        });
    }

    function handleSelectPokemon(pokemon) {
        setIsModalOpen(true)
        setSelectedPokemon(pokemon)
    }

    useEffect(() => {
        getPokemonList();
    }, []);

    return (
        <section className={styles.cardContainer}>
            <h2>Pokémons</h2>
            <div className={styles.cardGrid}>
                <Card items={pokemonList} onClick={handleSelectPokemon}/>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                overlayClassName={styles.modalOverlay}
                className={styles.modal}
            >
                <ModalContent
                    pokemon={selectedPokemon}
                />
            </Modal>
        </section>
    );
}
