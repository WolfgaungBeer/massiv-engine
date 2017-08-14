import { vec3, quat, mat4 } from 'gl-matrix';
import Object3D from '../Object3D';

export default class Transform extends Object3D {

    constructor() {
        super();
        this.type = 'Transform';
        this.position = vec3.fromValues(0, 0, 0);
        this.scaling = vec3.fromValues(1, 1, 1);
        this.quaternion = quat.create();
        this.matrixTouched = false;
        this.matrixNeedsUpdate = false;
        this.modelMatrix = mat4.create();
    }

    getPosition() {
        return this.position;
    }

    setPosition(x, y, z) {
        this.position = vec3.fromValues(x, y, z);
        this.matrixTouched = true;
        this.matrixNeedsUpdate = true;
    }

    getScale() {
        return this.scaling;
    }

    setScale(x, y, z) {
        this.scaling = vec3.fromValues(x, y, z);
        this.matrixTouched = true;
        this.matrixNeedsUpdate = true;
    }

    getQuaternion() {
        return this.quaternion;
    }

    setQuaternion(x, y, z, w) {
        this.quaternion = quat.fromValues(x, y, z, w);
        this.matrixTouched = true;
        this.matrixNeedsUpdate = true;
    }

    getModelMatrix() {
        return this.modelMatrix;
    }

    setModelMatrix(modelMatrix) {
        this.modelMatrix = modelMatrix;
    }

    translate(x, y, z) {
        this.position = vec3.add(vec3.create(), this.position, vec3.fromValues(x, y, z));
        this.matrixTouched = true;
        this.matrixNeedsUpdate = true;
    }

    translateX(value) {
        this.translate(value, 0, 0);
    }

    translateY(value) {
        this.translate(0, value, 0);
    }

    translateZ(value) {
        this.translate(0, 0, value);
    }

    scale(x, y, z) {
        this.scaling = vec3.add(vec3.create(), this.scaling, vec3.fromValues(x, y, z));
        this.matrixTouched = true;
        this.matrixNeedsUpdate = true;
    }

    scaleX(value) {
        this.scale(value, 0, 0);
    }

    scaleY(value) {
        this.scale(0, value, 0);
    }

    scaleZ(value) {
        this.scale(0, 0, value);
    }

    rotate(x, y, z) {
        const quaternion = quat.fromEuler(quat.create(), x, y, z);
        this.quaternion = quat.multiply(quat.create(), this.quaternion, quaternion);
        this.matrixTouched = true;
        this.matrixNeedsUpdate = true;
    }

    rotateX(value) {
        this.rotate(value, 0, 0);
    }

    rotateY(value) {
        this.rotate(0, value, 0);
    }

    rotateZ(value) {
        this.rotate(0, 0, value);
    }

    computeModelMatrix() {
        const pos = this.position;
        const scl = this.scaling;
        const rot = this.quaternion;

        if (this.parent && this.parent.matrixTouched) {
            const transformationMatrix = mat4.fromRotationTranslationScale(mat4.create(), rot, pos, scl);
            this.modelMatrix = mat4.multiply(mat4.create(), this.parent.modelMatrix, transformationMatrix);
        } else {

            if (this.matrixNeedsUpdate) {
                this.modelMatrix = mat4.fromRotationTranslationScale(mat4.create(), rot, pos, scl);
            }

        }

        this.matrixNeedsUpdate = false;
        return this.modelMatrix;
    }

}
