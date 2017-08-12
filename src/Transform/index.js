import { vec3, quat, mat4 } from 'gl-matrix';

export default class Transform {

    constructor() {
        this.position = vec3.fromValues(0, 0, 0);
        this.scaling = vec3.fromValues(1, 1, 1);
        this.quaternion = quat.create();
        this.positionDirty = false;
        this.scalingDirty = false;
        this.rotationDirty = false;
        this.modelMatrix = mat4.create();
    }

    getPosition() {
        return this.position;
    }

    setPosition(x, y, z) {
        this.position = vec3.fromValues(x, y, z);
    }

    getScale() {
        return this.scaling;
    }

    setScale(x, y, z) {
        this.scaling = vec3.fromValues(x, y, z);
    }

    getQuaternion() {
        return this.quaternion;
    }

    setQuaternion(x, y, z, w) {
        this.quaternion = quat.fromValues(x, y, z, w);
    }

    getModelMatrix() {
        return this.modelMatrix;
    }

    setModelMatrix(modelMatrix) {
        this.modelMatrix = modelMatrix;
    }

    translate(x, y, z) {
        this.position = vec3.add(vec3.create(), this.position, vec3.fromValues(x, y, z));
        this.positionDirty = true;
    }

    scale(x, y, z) {
        this.scaling = vec3.add(vec3.create(), this.scaling, vec3.fromValues(x, y, z));
        this.scalingDirty = true;
    }

    rotate(x, y, z) {
        const quaternion = quat.fromEuler(quat.create(), x, y, z);
        this.quaternion = quat.multiply(quat.create(), this.quaternion, quaternion);
        this.rotationDirty = true;
    }

    computeModelMatrix() {
        const pos = this.position;
        const scl = this.scaling;
        const rot = this.quaternion;
        const posDirty = this.positionDirty;
        const sclDirty = this.scalingDirty;
        const rotDirty = this.rotationDirty;

        if (posDirty && sclDirty && rotDirty) { // everything changed

            const transformationMatrix = mat4.fromRotationTranslationScale(mat4.create(), rot, pos, scl);
            this.modelMatrix = mat4.multiply(mat4.create(), this.modelMatrix, transformationMatrix);

        } else if (posDirty && !sclDirty && !rotDirty) { // only posDirty changed

            const transformationMatrix = mat4.fromTranslation(mat4.create(), pos);
            this.modelMatrix = mat4.multiply(mat4.create(), this.modelMatrix, transformationMatrix);

        } else if (!posDirty && sclDirty && !rotDirty) { // only sclDirty changed

            const transformationMatrix = mat4.fromScaling(mat4.create(), scl);
            this.modelMatrix = mat4.multiply(mat4.create(), this.modelMatrix, transformationMatrix);

        } else if (!posDirty && !sclDirty && rotDirty) { // only rotDirty changed

            const transformationMatrix = mat4.fromQuat(mat4.create(), rot);
            this.modelMatrix = mat4.multiply(mat4.create(), this.modelMatrix, transformationMatrix);

        } else if (posDirty && sclDirty && !rotDirty) { // posDirty and sclDirty changed

            const posMatrix = mat4.fromTranslation(mat4.create(), pos);
            const sclMatrix = mat4.fromScaling(mat4.create(), scl);
            this.modelMatrix = mat4.multiply(mat4.create(), this.modelMatrix, sclMatrix);
            this.modelMatrix = mat4.multiply(mat4.create(), this.modelMatrix, posMatrix);


        } else if (posDirty && !sclDirty && rotDirty) { // posDirty and rotDirty changed

            const transformationMatrix = mat4.fromRotationTranslation(mat4.create(), rot, pos);
            this.modelMatrix = mat4.multiply(mat4.create(), this.modelMatrix, transformationMatrix);

        } else if (!posDirty && sclDirty && rotDirty) { // sclDirty and rotDirty changed

            const sclMatrix = mat4.fromScaling(mat4.create(), scl);
            const rotMatrix = mat4.fromQuat(mat4.create(), rot);
            this.modelMatrix = mat4.multiply(mat4.create(), this.modelMatrix, sclMatrix);
            this.modelMatrix = mat4.multiply(mat4.create(), this.modelMatrix, rotMatrix);

        }

        this.positionDirty = false;
        this.scalingDirty = false;
        this.rotationDirty = false;
    }

}
