import axios from "axios";

const API_KEY = "AIzaSyCi86_ZNK_dR5DbeodJrx5siuEchjrpzt0"; // ExpenseTracker API key

/* Request body payload for SignIn and SignUp
    - email: string,
    - password: string,
    - returnSecureToken: boolean
 */
const authenticate = async (mode: "signUp" | "signInWithPassword", email: string, password: string): Promise<string> => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    });

    return response.data.idToken; // returning auth token
}

const createUser = (email: string, password: string) => {
    return authenticate("signUp", email, password);
}

const logIn = (email: string, password: string) => {
    return authenticate("signInWithPassword", email, password);
}

const getUserData = async (token: string = "") => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`;

    return await axios.post(url, {
        idToken: token
    });
}

export {createUser, logIn, getUserData};
