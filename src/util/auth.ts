import axios from "axios";

const API_KEY = "AIzaSyCi86_ZNK_dR5DbeodJrx5siuEchjrpzt0"; // ExpenseTracker
const FIREBASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${API_KEY}`;

/* Request body payload
email: string,
password: string,
returnSecureToken: boolean */

const createUser = async (email: string, password: string) => {
    const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    );
    console.log("email: " + email);
    console.log(response.status);
}

export {createUser};
