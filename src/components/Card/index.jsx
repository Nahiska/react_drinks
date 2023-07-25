import PropTypes from 'prop-types';
import styles from "./CardModal.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCart } from '../../hooks/useCart';

export function ModalCard ({ drink }) {

    const { addToCart, removeOneFromCart, removeAllFromCart } = useCart()


    return (
        <article key={drink.idDrink} className={styles.card}>
            <img src={drink.strDrinkThumb} alt="" />
            <span className={styles.ellipsis2}>{drink.strDrink}</span>
            <span>{drink.price}</span>
            <div className={styles.counter}>
                <button onClick={() => removeOneFromCart(drink.idDrink)}>
                    -
                </button>
                <span>{drink.quantity}</span>
                <button onClick={() => addToCart(drink)}>
                    +
                </button>
            </div>
            <FontAwesomeIcon icon={faTrash} className={styles.iconTrash} onClick={() => removeAllFromCart(drink.idDrink)} />
        </article>
    )
}

ModalCard.propTypes = {
    drink: PropTypes.object.isRequired
}