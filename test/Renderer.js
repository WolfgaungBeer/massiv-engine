import { mat4 } from 'gl-matrix';
import Mesh from './Mesh';
import { Object3D, PerspectiveCamera } from '../';
import { createShader, createProgram } from './utils';

export default class Renderer {

    constructor(domElement) {
        this.domElement = domElement;
        this.canvas = document.createElement("canvas");
        this.domElement.appendChild(this.canvas);
        this.canvas.width = this.domElement.clientWidth;
        this.canvas.height = this.domElement.clientHeight;
        this.gl = this.canvas.getContext("webgl2");
        this.scene = new Object3D();
        this.camera = new PerspectiveCamera(45, this.canvas.width/this.canvas.height, 0.1, 100);
        this.camera.setPosition(3, 5, 5);
        this.camera.lookAt(0, 0, 0);
        this.scene.addChildren([new Mesh(), new Mesh()]);
        this.sceneChildren = this.scene.getChildren();
        this.shaders = [];
        this.buffers = [];
        this.mvpLocs = [];
    }

    init() {
        const gl = this.gl;

        for (let i = 0; i < this.sceneChildren.length; i++) {
            // SHADERS
            const vertexShader = createShader(gl, gl.VERTEX_SHADER, this.sceneChildren[i].getVertexShaderSource());
            const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, this.sceneChildren[i].getFragmentShaderSource());
            this.shaders[i] = createProgram(gl, vertexShader, fragmentShader);

            // BUFFERS
            const positionAttribLoc = gl.getAttribLocation(this.shaders[i], "position");
            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.sceneChildren[i].getVertexData()), gl.STATIC_DRAW);
            this.buffers[i] = gl.createVertexArray();
            gl.bindVertexArray(this.buffers[i]);
            gl.enableVertexAttribArray(positionAttribLoc);
            gl.vertexAttribPointer(positionAttribLoc, 3, gl.FLOAT, false, 0, 0);
            this.mvpLocs[i] = gl.getUniformLocation(this.shaders[i], "mvp");
        }

        this.sceneChildren[0].translateX(2);
        this.sceneChildren[1].translateX(-2);
    }

    render() {
        const gl = this.gl;

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);

        this.scene.rotateY(2);
        this.scene.computeModelMatrix();

        for (let i = 0; i < this.sceneChildren.length; i++) {
            gl.useProgram(this.shaders[i]);

            this.sceneChildren[i].rotateX(2);
            const modelMatrix = this.sceneChildren[i].computeModelMatrix();
            const mv = mat4.multiply(mat4.create(), this.camera.getViewMatrix(), modelMatrix);
            const mvp = mat4.multiply(mat4.create(), this.camera.getProjectionMatrix(), mv);
            gl.uniformMatrix4fv(this.mvpLocs[i], false, mvp);

            gl.bindVertexArray(this.buffers[i]);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
        }
    }

}
