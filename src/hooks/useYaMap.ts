import {useEffect, useState} from "react";
import {YaMap} from "react-native-yamap";

function useYaMap(apiKey: string = "24da40b5-a8b7-47e7-896d-d59aa631de8e") {
    const [isInitialised, setIsInitialised] = useState(false);

    useEffect( () => {
        setIsInitialised(false);

        new Promise((resolve, reject) => {
            try {
                YaMap.init(apiKey).catch(error => { throw new Error(`YaMap initialization Error: ${error}`) });
                YaMap.setLocale("en_US").catch(error => { throw new Error(`YaMap setLocale Error: ${error}`) });
            } catch (error) {
                reject(error)
            }
            resolve(true);
        }).then(response => setIsInitialised(true))
            .catch(error => {
                console.log(error);
                setIsInitialised(false);
            });
    }, [apiKey])

    return isInitialised;
}

export default useYaMap;