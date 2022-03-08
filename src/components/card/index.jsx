import { colours } from '../../utils/type-colors';
import styles from './styles.module.scss';

export default function Card({ items, onClick }) {
    return items.map((item) => (
        <div
            className={styles.card}
            key={item.id}
            onClick={() => onClick(item)}
            style={{ backgroundColor: colours[item.types[0].type.name] }}
        >
            <div className={styles.cardImg}>
                <img src={item.sprites.front_default} alt={item.name} />
            </div>
            <div className={styles.cardInfo}>
                <span>
                    <strong>{item.name}</strong>
                </span>
            </div>
        </div>
    ));
}
