import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Card from '../card';
import ModalContent from '../modal-content';
import Searchfield from '../search-field';
import { asyncMakePokemonList } from './actions';
import styles from './styles.module.scss';

Modal.setAppElement('#root');

const getPokeList = ({ pokeReducer }) => pokeReducer.pokemonList;

export default function Cards() {
    const dispatch = useDispatch();
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pokemonList = useSelector(getPokeList, shallowEqual);

    function handleSelectPokemon(pokemon) {
        setIsModalOpen(true);
        setSelectedPokemon(pokemon);
    }

    useEffect(() => {
        dispatch(asyncMakePokemonList(''));
    }, []);

    return (
        <section className={styles.cardContainer}>
            <Searchfield />
            <h2>Pokémons</h2>
            <div className={styles.cardGrid}>
                <Card items={pokemonList} onClick={handleSelectPokemon} />
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                overlayClassName={styles.modalOverlay}
                className={styles.modal}
                onAfterOpen={() => (document.body.style.overflow = 'hidden')}
                onAfterClose={() => (document.body.style.overflow = 'unset')}
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
