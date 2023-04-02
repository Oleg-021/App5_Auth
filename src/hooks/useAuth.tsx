import {useContext, useEffect, useState} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {AuthContext} from "../store/auth-context";

function useAuth() {
    const [isTryingLogIn, setIsTryingLogIn] = useState(true);

    const authContext = useContext(AuthContext);

    useEffect(() => {
        AsyncStorage.getItem("token").then(async (storedToken) => {
            let email = await AsyncStorage.getItem("email");

            if (!email)
                email = "";

            if (storedToken)
                authContext.authenticate(storedToken, email);
            setIsTryingLogIn(false);
        });
    }, []);

    return isTryingLogIn;
}

export default useAuth;