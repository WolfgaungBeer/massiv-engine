const container = document.getElementById('root');
const canvas = document.createElement('canvas');
container.appendChild(canvas);
canvas.width = container.clientWidth;
canvas.height = container.clientHeight;
const gl = canvas.getContext('webgl2');
console.log(gl);
