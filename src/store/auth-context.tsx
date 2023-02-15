import React, {createContext, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Interfaces
interface IAuthContext {
    token?: string,
    isAuthenticated: boolean,
    authenticate: (token: string) => void,
    logout: () => void
}

interface IAuthContextProvider {
    children: React.ReactNode
}

/** Context logic... */
/** 1. Creating context */
const AuthContext = createContext<IAuthContext>({
    token: "",
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {}
});

/** 2. Making context provider for managing context state */
const AuthContextProvider: React.FC<IAuthContextProvider> = ({children}) => {
    // State
    const [authToken, setAuthToken] = useState<string>();

    // Functions
    const authenticate = (token: string) => {
        setAuthToken(token);
        AsyncStorage.setItem("token", token);
    }

    const logout = () => {
        setAuthToken(undefined);
        AsyncStorage.removeItem("token");
    }

    // Render
    /** 3. Constructing value for context provider */
    const value: IAuthContext = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export {AuthContext};
export default AuthContextProvider;
