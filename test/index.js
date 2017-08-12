import { mat4 } from 'gl-matrix';
import { Object3D, PerspectiveCamera } from '../';

var container = document.getElementById('root');
var canvas = document.createElement("canvas");
container.appendChild(canvas);
canvas.width = container.clientWidth;
canvas.height = container.clientHeight;
var gl = canvas.getContext("webgl2");

const obj = new Object3D();
const camera = new PerspectiveCamera(45, canvas.width/canvas.height, 0.1, 100);

const vertexShaderSource =
`#version 300 es

in vec4 a_position;

uniform mat4 mvp;

void main() {
  gl_Position = mvp * a_position;
}
`;

const fragmentShaderSource =
`#version 300 es
precision mediump float;

out vec4 outColor;

void main() {
  outColor = vec4(1, 0, 0.5, 1);
}
`;

function createShader(gl, type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }

  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
  return undefined;
}

function createProgram(gl, vertexShader, fragmentShader) {
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }

  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
  return undefined;
}

// create GLSL shaders, upload the GLSL source, compile the shaders
var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

// Link the two shaders into a program
var program = createProgram(gl, vertexShader, fragmentShader);

// look up where the vertex data needs to go.
var positionAttributeLocation = gl.getAttribLocation(program, "a_position");

// Create a buffer and put three 2d clip space points in it
var positionBuffer = gl.createBuffer();

// Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

var positions = [
  0.0,  0.5, 0.0,
  0.5, -0.5, 0.0,
 -0.5, -0.5, 0.0
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

// Create a vertex array object (attribute state)
var vao = gl.createVertexArray();

// and make it the one we're currently working with
gl.bindVertexArray(vao);

// Turn on the attribute
gl.enableVertexAttribArray(positionAttributeLocation);

// Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
var size = 3;          // 2 components per iteration
var type = gl.FLOAT;   // the data is 32bit floats
var normalize = false; // don't normalize the data
var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
var offset = 0;        // start at the beginning of the buffer
gl.vertexAttribPointer(
  positionAttributeLocation, size, type, normalize, stride, offset);

var mvpLocation = gl.getUniformLocation(program, "mvp");
obj.getTransform().computeModelMatrix();
var modelMatrix = obj.getTransform().getModelMatrix();
var viewMatrix = camera.getViewMatrix();
var projectionMatrix = camera.getProjectionMatrix();
var mv = mat4.multiply(mat4.create(), viewMatrix, modelMatrix);
var mvp = mat4.multiply(mat4.create(), projectionMatrix, mv);

// webglUtils.resizeCanvasToDisplaySize(gl.canvas);

// Tell WebGL how to convert from clip space to pixels
gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

// Clear the canvas
gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT);

// Tell it to use our program (pair of shaders)
gl.useProgram(program);

gl.uniformMatrix4fv(mvpLocation, false, mvp);

// Bind the attribute/buffer set we want.
gl.bindVertexArray(vao);

// draw
var primitiveType = gl.TRIANGLES;
var offset = 0;
var count = 3;
gl.drawArrays(primitiveType, offset, count);



function render() {

    // camera.getTransform().setPosition(10, 10, 10);
    // camera.lookAt(0, 0, 0);
    obj.getTransform().rotateY(0.5);
    obj.getTransform().computeModelMatrix();
    modelMatrix = obj.getTransform().getModelMatrix();
    viewMatrix = camera.getViewMatrix();
    projectionMatrix = camera.getProjectionMatrix();
    mv = mat4.multiply(mat4.create(), viewMatrix, modelMatrix);
    mvp = mat4.multiply(mat4.create(), projectionMatrix, mv);

    console.log(mvp);

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    // Clear the canvas
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Tell it to use our program (pair of shaders)
    gl.useProgram(program);

    gl.uniformMatrix4fv(mvpLocation, false, mvp);

    // Bind the attribute/buffer set we want.
    gl.bindVertexArray(vao);

    // draw
    var primitiveType = gl.TRIANGLES;
    var offset = 0;
    var count = 3;
    gl.drawArrays(primitiveType, offset, count);
}

setInterval(() => {
    render();
}, 1000/60);
