import v4 from 'uuid/v4';
import Transform from '../Transform';

export default class Object3D {

    constructor() {
        this.uuid = v4();
        this.name = 'Object3D';
        this.parent = undefined;
        this.children = [];
        this.transform = new Transform();
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

    getTransform() {
        return this.transform;
    }

    setTransform(transform) {
        this.transform = transform;
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

}