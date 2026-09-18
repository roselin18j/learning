import { useParams } from "react-router-dom";

export default function ServiceDetails() {

    const { slug } = useParams();

    return (
        <>
            <div className="service-details">
                <div className="container">
                    <h1>{slug}</h1>
                    <p>
                        Service details will be loaded dynamically.
                    </p>
                </div>
            </div>
        </>
    );
}