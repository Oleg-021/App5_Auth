export let Colors = {
    white: "#ffffff",
    black: "#000000",

    error50: "#fcbfbf",
    error500: "#ff4e4e",

    primary200: "#ffd593",
    primary500: "#fcbd55",
    primary700: "#ff9f00",

    accent200: "#c2c2c2",
    accent500: "#2b2b2b",
    accent700: "#131313",

    text: "#ffffff",

    game: {
        white: "#ffffff",
        cherry: "#72063c",
        darkCherry: "#4e0329",
        yellow: "#ddb52f"
    },

    themeStyle: "light"
}

export let welcomeBarStyle: "dark-content" | "light-content" = "dark-content";
export let appBarStyle: "dark-content" | "light-content" = "light-content";

export function setLightTheme() {
    Colors.primary200 = "#ffd593";
    Colors.primary500 = "#fcbd55";
    Colors.primary700 = "#ff9f00";

    Colors.accent200 = "#c2c2c2";
    Colors.accent500 = "#2b2b2b";
    Colors.accent700 = "#131313";

    Colors.text = "#000000";

    Colors.themeStyle = "light";

    welcomeBarStyle = "dark-content";
    appBarStyle = "light-content";
}

export function setDarkTheme() {
    Colors.primary200 = "#c2c2c2";
    Colors.primary500 = "#2b2b2b";
    Colors.primary700 = "#131313";

    Colors.accent200 = "#ffd593";
    Colors.accent500 = "#fcbd55";
    Colors.accent700 = "#ff9f00";

    Colors.text = "#000000";

    Colors.themeStyle = "dark";

    welcomeBarStyle = "light-content";
    appBarStyle = "dark-content";
}
