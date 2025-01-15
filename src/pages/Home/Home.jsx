import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => navigate("/yourbill")} >Your Bill</button>
            <button onClick={() => navigate("/securepay")} >Secure Pay</button>

        </div>
    )
}

export default Home