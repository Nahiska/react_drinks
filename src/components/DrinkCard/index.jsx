import { Col, Card, Button, Row } from 'react-bootstrap';
import { useDrinks } from "../../hooks/useDrinks";
import PropTypes from 'prop-types';
import { useCart } from '../../hooks/useCart';
import styles from "../CartModal/CartModal.module.css";

export default function DrinkCard({ drink }) {
    const { handleModalClick, handleDrinkIdClick } = useDrinks();
    const { addToCart } = useCart();

    function handleAddToCart(drink) {
        addToCart(drink)
    }

    return (
        <Col md={6} ld={3} >
            <Card className="mb-4 shadow-sm">
                <Card.Img
                    variant="top"
                    src={drink.strDrinkThumb}
                    alt={`Imagen de ${drink.strDrink}`}
                />
                <Card.Body>
                    <Card.Title className={styles.ellipsis} style={{ maxWidth: '250px', maxHeight: '100px' }}>
                        {drink.strDrink}
                    </Card.Title>
                    <Card.Subtitle style={{ marginBottom: 6, color: '#008000' }}>$ {drink.price}</Card.Subtitle>
                    <Row className="d-flex justify-content-center">
                        <Col xs={12} md={6} className="mb-3">
                            <Button
                                className="text-uppercase w-100 shadow"
                                style={{ minHeight: '60px', padding: '10px', background: '#950380', border: 'none' }}
                                onClick={() => {
                                    handleModalClick();
                                    handleDrinkIdClick(drink.idDrink)
                                }}
                            >
                                Ver receta
                            </Button>
                        </Col>
                        <Col xs={12} md={6}>
                            <Button
                                className="text-uppercase w-100 shadow"
                                style={{ minHeight: '60px', color: '#FFFFFF', background: "#B08B2E", border: 'none' }}
                                onClick={() => handleAddToCart(drink)}
                            >
                                Agregar al carrito
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

DrinkCard.propTypes = {
    drink: PropTypes.shape({
        strDrinkThumb: PropTypes.string.isRequired,
        strDrink: PropTypes.string.isRequired,
        idDrink: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    })
};