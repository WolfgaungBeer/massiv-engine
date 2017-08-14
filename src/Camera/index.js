import { vec3, mat4 } from 'gl-matrix';
import Object3D from '../Object3D';

export default class Camera extends Object3D {

    constructor() {
        super();
        this.type = 'Camera';
        this.upVector = vec3.fromValues(0, 1, 0);
        this.viewMatrix = mat4.create();
        this.projectionMatrix = mat4.create();
    }

    getUpVector() {
        return this.upVector;
    }

    setUpVector(x, y, z) {
        this.upVector = vec3.fromValues(x, y, z);
    }

    getViewMatrix() {
        return this.viewMatrix;
    }

    setViewMatrix(viewMatrix) {
        this.viewMatrix = viewMatrix;
    }

    getProjectionMatrix() {
        return this.projectionMatrix;
    }

    setProjectionMatrix(projectionMatrix) {
        this.projectionMatrix = projectionMatrix;
    }

    lookAt(x, y, z) {
        const position = this.getPosition();
        this.viewMatrix = mat4.lookAt(mat4.create(), position, vec3.fromValues(x, y, z), this.upVector);
    }

}
