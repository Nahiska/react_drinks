import styles from "./MainLayout.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import CartModal from "../components/CartModal";

export default function MainLayout ({children}) {
    return (
        <div className={styles.main}>
            <Header />
            <Container className="mt-5">
                {children}
            </Container>
            <CartModal />
            <Footer />
        </div>

    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
    //El arbol de componentes se representa a través de nodos. Los nodos serían el header, el texto dentro del header, children
}