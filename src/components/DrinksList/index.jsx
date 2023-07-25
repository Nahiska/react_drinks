import { Row } from "react-bootstrap";
import { useDrinks}  from "../../hooks/useDrinks";
import DrinkCard from "../DrinkCard";

export default function DrinksList () {
    const { drinks } = useDrinks();

    if (drinks.length === 0 ) {
        return (
            <Row className="p-5 m-5">
                <h1 className="text-center"  style={{ color: "white", fontWeight: "300" }}>No hay resultados</h1>
            </Row>
        )
    }

    return (
        <Row className="mt-5">
            {
                drinks.map((drink) => (
                    <DrinkCard key={drink.idDrink} drink={drink} />
                    //Siempre tiene que tener una key única para que lo reconozca el DOM
                ))
            }
        </Row>
    )
}