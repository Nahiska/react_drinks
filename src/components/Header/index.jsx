import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useModal from "../../hooks/useModal";
import styles from "./Header.module.css";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";


export default function Header() {
    const { toogleModal } = useModal();
    const { currentUser, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleBurgerMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    console.log(currentUser);

    return (
        <header className={`py-3 ${styles.header}`}>
            <div className={styles.headerContent}>
                <div className={styles.logoContainer}>
                    <Link to="https://github.com/Nahiska"><img src={logo} alt="Logo Nahiska Drinks" className={styles.logo} />
                    </Link>
                </div>
                <div className={styles.burgerMenu} onClick={handleBurgerMenuClick}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={`${styles.dropdownContent} ${menuOpen ? styles.show : ''}`}>
                    {currentUser && (
                        <ul>
                            <li>{currentUser.name}</li>
                            <li onClick={toogleModal} >Mi carrito <FontAwesomeIcon icon={faCartShopping}/></li>
                            <li><button onClick={logout}>Cerrar sesión</button></li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    )
}