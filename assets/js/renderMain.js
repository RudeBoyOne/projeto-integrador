export const getOrCreateMainElement = () => {
    let main = document.getElementById('main');
    if (!main) {
        main = document.createElement('main');
        main.id = 'main';
        document.body.appendChild(main);
    }
    return main;
};
