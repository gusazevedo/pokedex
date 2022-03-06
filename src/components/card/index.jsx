import styles from './styles.module.scss';

export default function Card({ items }) {
    return items.map((item) => (
        <div className={styles.card} key={item.id}>
            <div className={styles.cardImg}>
                <img src={item.sprites.front_default} alt={item.name} />
            </div>
            <div className={styles.cardInfo}>
                <span><strong>{item.name}</strong></span>
            </div>
        </div>
    ))
}