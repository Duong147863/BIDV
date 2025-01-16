import { useNavigate } from "react-router-dom";
import styles from './Home.module.css';

function Home() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <h1 className={styles.title} >Welcome to BIDV</h1>
            <button className={styles.button} onClick={() => navigate("/yourbill")}>Your Bill</button>
            <button className={styles.button} onClick={() => navigate("/securepay")}>Secure Pay</button>
            <button className={styles.button} onClick={() => navigate("/homepage")}>HomePage After login</button>
            <button className={styles.button} onClick={() => navigate("/login")}>Login</button>
        </div>
    );
}

export default Home;
