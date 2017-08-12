import { mat4 } from 'gl-matrix';
import Camera from '../Camera';

export default class OrthographicCamera extends Camera {

    constructor(left, right, bottom, top, near, far) {
        super();
        this.left = left;
        this.right = right;
        this.bottom = bottom;
        this.top = top;
        this.near = near;
        this.far = far;
        this.updateProjectionMatrix(left, right, bottom, top, near, far);
    }

    updateProjectionMatrix(left, right, bottom, top, near, far) {
        this.left = left;
        this.right = right;
        this.bottom = bottom;
        this.top = top;
        this.near = near;
        this.far = far;
        this.projectionMatrix = mat4.ortho(mat4.create(), left, right, bottom, top, near, far);
    }

}
