import Copyright from "../../pages/User/Copyright";
import styles from "./Footer.module.css";

export default function Footer () {
    return (
        <footer className={`py-1 ${styles.footer}`}>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </footer>
    )
}