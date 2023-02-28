import React, {createContext, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Interfaces
interface IAuthContext {
    token?: string,
    email?: string
    isAuthenticated: boolean,
    authenticate: (token: string, email?: string) => void,
    logout: () => void
}

interface IAuthContextProvider {
    children: React.ReactNode
}

/** Context logic... */
/** 1. Creating context */
const AuthContext = createContext<IAuthContext>({
    token: "",
    email: "",
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {}
});

/** 2. Making context provider for managing context state */
const AuthContextProvider: React.FC<IAuthContextProvider> = ({children}) => {
    // State
    const [authToken, setAuthToken] = useState<string>();
    const [email, setEmail] = useState<string>("");

    // Functions
    const authenticate = (token: string, email: string = "") => {
        setAuthToken(token);
        setEmail(email);
        // SecureStorage
        AsyncStorage.setItem("token", token);
        AsyncStorage.setItem("email", email);
    }

    const logout = () => {
        setAuthToken(undefined);
        setEmail("");
        AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("email");
    }

    // Render
    /** 3. Constructing value for context provider */
    const value: IAuthContext = {
        token: authToken,
        email: email,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export {AuthContext};
export default AuthContextProvider;
