import Renderer from './Renderer';

const container = document.getElementById('root');
const renderer = new Renderer(container);
renderer.init();

setInterval(() => {
    renderer.render();
}, 1000/30);
