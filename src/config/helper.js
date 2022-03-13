const changeBackgroundLightToDark = () => {
    document.documentElement.style.setProperty('--main-bg-color', 'var(--color-light-purple)');
    document.documentElement.style.setProperty('--main-bg-color2', 'var(--color-dark-purple)');
};

const changeBackgroundDarkToLight = () => {
    document.documentElement.style.setProperty('--main-bg-color', 'var(--color-dark-purple)');
    document.documentElement.style.setProperty('--main-bg-color2', 'var(--color-light-purple)');
};

export {
    changeBackgroundLightToDark,
    changeBackgroundDarkToLight,
}