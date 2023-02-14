import axios from "axios";

const API_KEY = "AIzaSyCi86_ZNK_dR5DbeodJrx5siuEchjrpzt0"; // ExpenseTracker API key

/* Request body payload for SignIn and SignUp
    - email: string,
    - password: string,
    - returnSecureToken: boolean
 */
const authenticate = async (mode: "signUp" | "signInWithPassword", email: string, password: string) => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    });

    console.log(response.data);
}

const createUser = async (email: string, password: string) => {
    await authenticate("signUp", email, password);
}

const logIn = async (email: string, password: string) => {
    await authenticate("signInWithPassword", email, password);
}

export {createUser, logIn};
