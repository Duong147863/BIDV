import { useRouteError, useNavigate } from 'react-router-dom';
import styles from './Error.module.css';

function Error() {
    const navigate = useNavigate();
    const error = useRouteError(); // Nhận lỗi 
    console.error("Error:", error);


    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.errorTitle}>Oops! Something went wrong.</h1>
            <p className={styles.errorMessage}>
                {error.data}

                <button className={styles.homepageButton} onClick={() => navigate("/")}>
                    homepage
                </button>
            </p>
        </div>
    );
}

export default Error;
