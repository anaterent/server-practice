import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


import { useAuth } from "../../contexts/AuthContext";

export default function ErrorMessage() {
    const { error, setError } = useAuth();

    return (
        error && (
            <div>
                <div >
                    <div >
                        <div>
                            <FontAwesomeIcon icon={faXmark}
                                onClick={() => setError("")}
                                aria-hidden="true"
                            />
                        </div>
                        <div>
                            <h3>
                                Error: {error}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}