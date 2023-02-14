import axios from "axios";

const ExpenseTrackerApiKey = "AIzaSyCi86_ZNK_dR5DbeodJrx5siuEchjrpzt0";
const FIREBASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]";



const createUser = () => {
    axios.post(
        FIREBASE_URL
    );
}
