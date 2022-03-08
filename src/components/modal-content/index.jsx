import styles from './styles.module.scss';

export default function ModalContent({ pokemon }) {
    return (
        <div className={styles.modalContainer}>
            <span>X</span>
            <div className={styles.modalContent}>
                <div className={styles.pokemonImg}>
                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
                </div>
                <div className={styles.statsContainer}>
                    <div className={styles.name}>
                        <h1>{pokemon.name}</h1>
                        <span>#{pokemon.order}</span>
                    </div>
                    <div className={styles.stats}>
                        { pokemon.stats.map((stat, index) => (
                            <div>
                                <span key={index}>{stat.stat.name}</span>
                                <div className={styles.loadingContainer}>
                                    <div className={styles.loading} style={{ width: stat.base_stat }}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}