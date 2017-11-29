import EventEmitter from 'eventemitter3';
import v4 from 'uuid/v4';
import { vec3, quat, mat4 } from 'gl-matrix';

export default class Object3D extends EventEmitter {

    constructor() {
        super();
        this.uuid = v4();
        this.name = 'Object3D';
        this.type = 'Object3D';
        this.parent = undefined;
        this.children = [];
        this.position = vec3.fromValues(0, 0, 0);
        this.scaling = vec3.fromValues(1, 1, 1);
        this.quaternion = quat.create();
        this.matrixTouched = false;
        this.matrixNeedsUpdate = false;
        this.modelMatrix = mat4.create();
    }

    getUuid() {
        return this.uuid;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getType() {
        return this.type;
    }

    setType(type) {
        this.type = type;
    }

    getParent() {
        return this.parent;
    }

    setParent(parent) {
        parent.children.push(this);
        this.parent = parent;
    }

    getChildren() {
        return this.children;
    }

    setChildren(children) {
        for (let i = 0; i < children.length; i++) {
            children[i].setParent(this);
        }
        this.children = children;
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

    addChild(child) {
        child.setParent(this);
        this.children.push(child);
    }

    addChildren(children) {
        for (let i = 0; i < children.length; i++) {
            children[i].setParent(this);
        }
        this.children = this.children.concat(children);
    }

    getChildByName(name, recursive) {
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].getName() === name) {
                return this.children[i];
            }

            if (recursive) {
                const childChild = this.children[i].getChildByName(name, recursive);
                if (childChild) return childChild;
            }

        }
        return undefined;
    }

    getChildrenAsFlatArray(recursive) {
        let children = [];
        for (let i = 0; i < this.children.length; i++) {
            children.push(this.children[i]);

            if (recursive) {
                const childChildren = this.children[i].getChildrenAsFlatArray(recursive);
                children = children.concat(childChildren);
            }

        }
        return children;
    }

    getChildrenByName(name, recursive) {
        let children = [];
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].getName() === name) {
                children.push(this.children[i]);
            }

            if (recursive) {
                const childChildren = this.children[i].getChildrenByName(name, recursive);
                children = children.concat(childChildren);
            }

        }
        return children;
    }

    getChildrenByType(type, recursive) {
        let children = [];
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].getType() === type) {
                children.push(this.children[i]);
            }

            if (recursive) {
                const childChildren = this.children[i].getChildrenByType(type, recursive);
                children = children.concat(childChildren);
            }

        }
        return children;
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
