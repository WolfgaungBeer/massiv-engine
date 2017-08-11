import { vec3, quat } from 'gl-matrix';

export default class Transform {

    constructor() {
        this.position = vec3.fromValues(0, 0, 0);
        this.scale = vec3.fromValues(1, 1, 1);
        this.quaternion = quat.create();
    }

    getPosition() {
        return this.position;
    }

    setPosition(x, y, z) {
        this.position = vec3.fromValues(x, y, z);
    }

    getScale() {
        return this.scale;
    }

    setScale(x, y, z) {
        this.scale = vec3.fromValues(x, y, z);
    }

    getQuaternion() {
        return this.quaternion;
    }

    setQuaternion(x, y, z, w) {
        this.quaternion = quat.fromValues(x, y, z, w);
    }

}
