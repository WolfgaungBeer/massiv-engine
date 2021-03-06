import { mat4 } from 'gl-matrix';
import Camera from '../Camera';

export default class PerspectiveCamera extends Camera {

    constructor(fov, aspect, near, far) {
        super();
        this.type = 'PerspectiveCamera';
        this.fov = fov;
        this.aspect = aspect;
        this.near = near;
        this.far = far;
        this.updateProjectionMatrix(fov, aspect, near, far);
    }

    updateProjectionMatrix(fov, aspect, near, far) {
        this.fov = fov;
        this.aspect = aspect;
        this.near = near;
        this.far = far;
        this.projectionMatrix = mat4.perspective(mat4.create(), fov, aspect, near, far);
    }

}
