import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
// import { asyncGetPokemonInformations, getPokemons } from '../../services/api';
import Card from '../card';
import ModalContent from '../modal-content';
import Searchfield from '../search-field';
import { asyncMakePokemonList } from './actions';
import styles from './styles.module.scss';

Modal.setAppElement('#root');

export default function Cards() {
    const dispatch = useDispatch();
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // async function getPokemonList(pokemon) {
    //     const { data } = await getPokemons(pokemon);
    //     await data.results.forEach( async (pokemon) => {
    //         const getPokemonInfo = await asyncGetPokemonInformations(pokemon.name);
    //         setPokemonList(previousState => [...previousState, getPokemonInfo.data]);
    //     });
    // }

    function handleSelectPokemon(pokemon) {
        setIsModalOpen(true)
        setSelectedPokemon(pokemon)
    }

    useEffect(() => {
        // getPokemonList('');
        dispatch(asyncMakePokemonList(''));
    }, []);

    return (
        <section className={styles.cardContainer}>
            <Searchfield />
            <h2>Pokémons</h2>
            <div className={styles.cardGrid}>
                <Card items={pokemonList} onClick={handleSelectPokemon}/>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                overlayClassName={styles.modalOverlay}
                className={styles.modal}
                onAfterOpen={() => document.body.style.overflow = 'hidden'}
                onAfterClose={() => document.body.style.overflow = 'unset'}
                shouldCloseOnOverlayClick={false}
            >
                <ModalContent
                    pokemon={selectedPokemon}
                    handleCloseModal={setIsModalOpen}
                />
            </Modal>
        </section>
    );
}
